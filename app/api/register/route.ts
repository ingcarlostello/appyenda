// @Nextjs
import { NextResponse } from "next/server";

// @Appwrite
import { ID } from "appwrite";

// @Libs
import { account, databases, appwriteConfig } from "@/lib/appwrite/config";

// @Interfaces
import { IUser } from "@/interfaces/IAuth";

async function createUserAccount(user: IUser) {
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
            usertype: "business",
        });

        return newUser;
    } catch (error) {
        throw new Error(`Error creating account: ${error}`);
    }
}

async function saveUserToDB(user: IUser) {
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

export async function POST(request: Request) {
    const body = await request.json();
    try {
        const resposeUserAccount = await createUserAccount(body);
        if (resposeUserAccount?.$id) {
            return NextResponse.json({
                success: true,
                message: "User created successfully",
            },
            { status: 201 });
        }
        if (!resposeUserAccount?.$id) {
            return NextResponse.json(
                {
                    success: false,
                    message: "A user with the same id, email, or phone already exists.",
                },
                { status: 400 }
            );
        }
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                message: `An error occurred: ${(error as Error).message}`,
            },
            { status: 500 }
        );
    }
}