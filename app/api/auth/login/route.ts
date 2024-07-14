import { NextResponse } from "next/server";

// @jsonwebtoken
import { sign } from "jsonwebtoken";

export async function POST(request: Request, response: Response) {
    const body = await request.json();

    if (body.userType) {
        const userToken = sign(
            {
                userType: body.userType,
                exp: Math.floor(Date.now() / 100) + 60 * 60 * 24 * 30, // expires in 30 days
            },
            "sTmpL9bJn452j8HeXsrn9nQrnJ5895MJAsKzZNS9NMnuEAFMYL" //  cambiar por variable de entorno
        );

        const response = NextResponse.json({
            userToken,
        });

        response.cookies.set({
            name: "userToken",
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
