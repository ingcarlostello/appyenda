// @Nextjs
import { NextResponse } from "next/server";

// @Appwrite config
import { createUserAccount } from "@/lib/appwrite/api";

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