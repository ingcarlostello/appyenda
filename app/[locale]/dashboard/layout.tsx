"use client";

import { useEffect, useState } from "react";

// @Components
import LanguageSelector from "@/components/shared/LanguageSelector";
import { MobileSidebar } from "@/components/shared/mobileSidebar/MobileSidebar";
import Sidebar from "@/components/sidebar-nav/Sidebar";
import { ModeToggle } from "@/components/theme-toggle";

// @Interfaces
import { Account, IUser, Session } from "@/interfaces/IAuth";

// @Libs
import { checkUser } from "@/lib/appwrite/api";
import { account } from "@/lib/appwrite/config";

// @Store
import { useAuthStore } from "@/stores/auth.store";
import { useServicesStore } from "@/stores/services.store"

// @Actions
import { getServices } from "@/lib/actions/services.actions";

type DashboardLayoutProps = { children: React.ReactNode };

const Layout = ({ children }: DashboardLayoutProps) => {
	const [count, setCount] = useState<number>(0);
	const [socialAccount, setSocialAccount] = useState<Account>();
	const [session, setSession] = useState<Partial<Session>>();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const loginUser = useAuthStore((state) => state.loginUserWithEmail);

	// useEffect that loads the useAuthStore with user data
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

	const userProviderDocumentId = useAuthStore((state) => state.userProviderDocumentId);
    const services = useServicesStore((state) => state.loadServices);

    useEffect(() => {
        const fetchServices = async () => {
            setIsLoading(true);
            try {
                const listOfServices = await getServices(userProviderDocumentId as string);
                services(listOfServices as []);
            } catch (error) {
                console.error("Error fetching services:", error);
            } finally {
                setIsLoading(false);
            }
        };
        if (userProviderDocumentId) {
            fetchServices();
        }
    }, [userProviderDocumentId, services]);

	return (
		<div className="h-screen ">
			<div className="flex justify-between place-items-end sm:justify-end">
				<div className="md:hidden pl-4 pt-4">
					<MobileSidebar />
				</div>
				<div className="flex justify-end  gap-2 pr-4 pt-2">
					<div>
						<ModeToggle />
					</div>
					<LanguageSelector />
				</div>
			</div>
			<div className=" flex">
				<div className="w-2/12 border-r h-screen sm:relative sm:-top-11  max-[767px]:hidden md:block md:w-1/4 lg:w-1/6">
					<Sidebar />
				</div>
				<div className="w-full pl-8">{children}</div>
			</div>
		</div>
	);
};

export default Layout;
