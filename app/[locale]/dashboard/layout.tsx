"use client";

import { useEffect, useState } from "react";

// @Appwrite
import { Query } from "appwrite";

// @Components
import LanguageSelector from "@/components/shared/LanguageSelector";
import { MobileSidebar } from "@/components/shared/mobileSidebar/MobileSidebar";
import Sidebar from "@/components/sidebar-nav/Sidebar";

// @Helpers
import { extracUserNameFromEmail } from "@/helpers/extractUserFromEmail";

// @Interfaces
import { Account, IUser, Session } from "@/interfaces/IAuth";

// @Libs
import { checkUser, saveUserToDB } from "@/lib/appwrite/api";
import { account, appwriteConfig, databases } from "@/lib/appwrite/config";

// @Store
import { useAuthStore } from "@/stores/auth.store";

// @Js-cookie
import Cookies from "js-cookie";

type DashboardLayoutProps = { children: React.ReactNode };

const Layout = ({ children }: DashboardLayoutProps) => {
	const [count, setCount] = useState<number>(0);
	const [socialAccount, setSocialAccount] = useState<Account>();
	const [session, setSession] = useState<Partial<Session>>();

	const loginUser = useAuthStore((state) => state.loginUserWithEmail);

	useEffect(() => {
		const verifySocialAccount = async () => {
			try {
				const currentAccount = await account.get();
				const currentSession = await account.getSession("current");
				const userData = await checkUser();
				loginUser(userData as IUser);
				setSocialAccount(currentAccount);
				setSession(currentSession);
				setCount(count + 1);
			} catch (error) {
				console.error("Error verifying social account:", error);
			}
		};
		verifySocialAccount();
	}, []);

	useEffect(() => {
		const saveUserSocialAccountToDB = async () => {
			if (!session?.userId || !socialAccount) return;
			Cookies.set("social-account-cookie", session?.providerAccessToken!);

			if (session.provider != "email") {
				try {
					const response = await databases.listDocuments(
						appwriteConfig.databaseId!,
						appwriteConfig.userCollectionId!,
						[Query.equal("userId", session.userId)]
					);

					if (response.total === 0) {
						if (count === 1) {
							await saveUserToDB({
								email: socialAccount.email,
								name: socialAccount.name,
								userId: socialAccount.$id,
								username: extracUserNameFromEmail(socialAccount.email),
								usertype: "client",
							});
							loginUser({
								email: socialAccount.email,
								name: socialAccount.name,
								userId: socialAccount.$id,
								username: extracUserNameFromEmail(socialAccount.email),
								usertype: "client",
							});
						}
					}
				} catch (error) {
					console.error("Error saving user social account to DB:", error);
				}
			}
		};
		saveUserSocialAccountToDB();
	}, [count]);

	return (
		<div className="h-screen">
			<div className="md:hidden pl-4 pt-4">
				<MobileSidebar />
			</div>

			<div className="flex justify-end pr-4 pt-2">
				<LanguageSelector />
			</div>

			<div className="flex">
				<div className="bg-slate-50 w-2/12 border-r h-screen max-[767px]:hidden md:block md:w-1/4 lg:w-1/6">
					<Sidebar />
				</div>

				<div className="w-full pl-8">{children}</div>
			</div>
		</div>
	);
};

export default Layout;
