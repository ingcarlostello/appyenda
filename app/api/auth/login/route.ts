import { NextResponse } from "next/server";

// @jsonwebtoken
import { sign } from "jsonwebtoken";

// @Constants
import { USER_TOKEN } from "@/constants/global";

export async function POST(request: Request) {
    const body = await request.json();

    if (body.userType) {
        const userToken = sign(
            {
                userType: body.userType,
                exp: Math.floor(Date.now() / 100) + 60 * 60 * 24 * 30, // expires in 30 days
            },
            process.env.NEXT_PUBLIC_SECRET_TOKEN as string,
        );

        const response = NextResponse.json({
            userToken,
        });

        response.cookies.set({
            name: USER_TOKEN,
            value: userToken,
            httpOnly: true,
            sameSite: "strict",
            maxAge: 1000 * 60 * 60 * 24 * 30,
            path: "/",
        });

        return response;
    } else {
        return NextResponse.json(
            {message: "Invalid credentials"},
            {status: 401}
        );
    }
}
