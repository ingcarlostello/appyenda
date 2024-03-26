// @Appwrite
import { ID, Query } from "appwrite";

// @Appwrite config
import { account, appwriteConfig, databases } from "./config";

// @Interfaces
import { IUser } from "@/interfaces/IAuth";

export async function createUserAccount(user: IUser) {    
    try {
        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password!,
            user.name
        );

        const newUser = await saveUserToDB({
            userId: newAccount.$id,
            name: user.name,
            username: user.username,
            email: user.email.toString(),
            usertype: user.usertype,
        });

        return newUser;
    } catch (error) {
        throw new Error(`Error creating account: ${error}`);
    }
}

export async function saveUserToDB(user: IUser) {
    try {
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId as string,
            appwriteConfig.userCollectionId as string,
            ID.unique(),
            user
        );
        return newUser;
    } catch (error) {
        throw new Error(`Error saving user to DB: ${error}`);
    }
}

export async function signInAccount(user: { email: string; password: string }) {
    try {
        const session = await account.createEmailSession(user.email, user.password);
        return session;
    } catch (error) {
        console.log(error);
    }
}

export async function getAccount() {
    try {
        const currentAccount = await account.get();
        return currentAccount;
    } catch (error) {
        console.log(error);
    }
}

export async function getCurrentUser() {
    try {
        const currentAccount = await getAccount();

        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId!,
            appwriteConfig.userCollectionId!,
            [Query.equal("userId", currentAccount.$id)]
        );

        if (!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const useGetProfileByUserId = async (userId: string) => {
    try {
        const response = await databases.listDocuments(
            appwriteConfig.databaseId!,
            appwriteConfig.userCollectionId!,
            [Query.equal("userId", userId)]
        );
        const documents = response.documents;
        return {
            email: documents[0]?.email,
            id: documents[0]?.$id,
            name: documents[0]?.name,
            userId: documents[0]?.userId,
            username: documents[0]?.username,
            usertype: documents[0]?.usertype,
        }
    } catch (error) {
        throw error
    }
}

export const checkUser = async () => {
    try {
        const currentSession = await account.getSession("current")

        if (!currentSession) throw new Error("No current session");
        const promise = await account.get() as any        

        const profile = await useGetProfileByUserId(promise?.$id)

        if (!profile) throw new Error("Profile not found");

        return profile
    } catch (error) {
        return {
            success: false,
            error: `No user session exists: ${error}` ,
        };
    }
}

export const logout = async () => {
    try {
        await account.deleteSession('current');
    } catch (error) {
        console.error(error);
    }
};

export const googleAuth = () => {
    try {
        account.createOAuth2Session('google', 'http://localhost:3000/dashboard', 'http://localhost:3000/login')
    } catch (error) {
        console.log('google error', error);
    }
}
