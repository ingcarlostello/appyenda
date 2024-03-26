import { useEffect, useState } from "react";

// @Nextjs
import { useRouter } from "next/navigation";

// @Appwrite
import { Query } from "appwrite";

// @Lib
import { account, appwriteConfig, databases } from "@/lib/appwrite/config";
import { checkUser, logout, saveUserToDB } from "@/lib/appwrite/api";

// @Helpers
import { extracUserNameFromEmail } from "@/helpers/extractUserFromEmail";

// @Constants
import { APPYENDA } from "@/constants/pages";

// @Js-cookie
import Cookies from "js-cookie";

// @Interfaces
import { Account, IUser, Session } from "@/interfaces/IAuth";

// @Stores
import { useAuthStore } from "@/stores/auth.store";

const DashboardViewModel = () => {
    const router = useRouter();

    const [count, setCount] = useState<number>(0);
    const [socialAccount, setSocialAccount] = useState<Account>();
    const [session, setSession] = useState<Partial<Session>>();

    const loginUser = useAuthStore(state => state.loginUserWithEmail)

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
        };
        saveUserSocialAccountToDB();
    }, [count]);

    const handleSignOut = async () => {
        Cookies.remove("login-user-cookie");
        Cookies.remove("initial-social-cookie");
        Cookies.remove("social-account-cookie");
        await logout();
        router.push(APPYENDA.LOGIN);
        router.refresh();
    };

    return {
        handleSignOut,
    };
};

export default DashboardViewModel;
