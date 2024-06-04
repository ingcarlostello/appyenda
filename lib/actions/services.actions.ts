import { Query } from "appwrite";
import { appwriteConfig, databases } from "../appwrite/config";

export const getServices = async (providerDocumentId: string) => {
    try {
        const responseProvider = await databases.listDocuments(
            appwriteConfig.databaseId!,
            appwriteConfig.servicesCollectionId!,
            [Query.equal("provider", providerDocumentId)]
        );
        const documentsProvider = responseProvider.documents;  
        console.log('documentsProvider ****>', documentsProvider);
        return documentsProvider;
    } catch (error) {
        console.error("Error obtaining services:", error);
        throw error;
    }
};
