"use server";

// @Appwrite
import { ID } from "appwrite";

// @UUID
import { v4 as uuidv4 } from "uuid";

// @Constants
import {
    APPWRITE_DATA_BASE,
    COLLABORATORS_COLLECTION_ID,
} from "@/constants/appwrite";

// @Appwrite config
import { databases } from "../appwrite/config";

export const saveCollaborator = async (collaborator, providerId) => {
    try {
        const newCollaborator = await databases.createDocument(
            APPWRITE_DATA_BASE!,
            COLLABORATORS_COLLECTION_ID!,
            ID.unique(),
            {
                ...collaborator,
                collaboratorId: uuidv4(),
                provider: providerId,
            }
        );
        return newCollaborator;
    } catch (error) {
        console.error("Error saving collaborator:", error);
        throw new Error("Failed to save collaborator");
    }
};
