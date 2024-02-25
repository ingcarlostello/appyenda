import { account } from "@/lib/appwrite/config";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const body = await request.json();

    console.log('body --->', body);

    try {
        const response = await account.createEmailSession(body.email, body.password)

        console.log('response ****>', response);
    
        // if (response.current) {
        //     console.log('si logea');
        //     const isLogging = await account.getSession('current')
        //     console.log('isLogging -->', isLogging);
        //     return isLogging
        // }
        await account.getSession('current')
        
    
        return NextResponse.json({
            message:"login"
        })
    } catch (error) {
        console.log('error de login--->', error);
        

        return NextResponse.json(
            {
                success: false,
                message: `An error occurred: ${(error as Error).message}`,
            },
            { status: 500 }
        );
        
    }


    

   


    
}