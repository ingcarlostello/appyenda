import { Client, Account, Databases, Storage } from "appwrite";

export const appwriteConfig = {
    projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
    url: process.env.NEXT_PUBLIC_APPWRITE_URL,
    databaseId: process.env.NEXT_PUBLIC_DATABASE_ID,
    storageId: process.env.NEXT_PUBLIC_APPWRITE_STORAGE_ID,
    userCollectionId: process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION_ID

};

export const client = new Client();

client.setProject(appwriteConfig.projectId as string);
client.setEndpoint(appwriteConfig.url as string);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

// min 1:22:04 --> agreagr usuario a auth y coleccion
