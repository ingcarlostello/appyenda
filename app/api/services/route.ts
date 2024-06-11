// @Nextjs
import { NextResponse } from "next/server";

// @Appwrite config
import { addServiceToDB } from "@/lib/appwrite/api";
import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(request: Request) {
    const body = await request.json();
    
    try {
        const responseService = await addServiceToDB(body);

        if (responseService.$id) {
            return NextResponse.json(
                {
                    success: true,
                    message: "Service created successfully",
                },
                { status: 201 }
            );
        }

        if (!responseService.$id) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Error creating service",
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