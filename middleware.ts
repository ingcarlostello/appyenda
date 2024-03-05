// @next-intl
import createMiddleware from "next-intl/middleware";

// @Nextjs
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
    const authToken = request.cookies.get("login-user-cookie")?.value;

    if (request.nextUrl.pathname.startsWith("/dashboard") && !authToken) {
        const response = NextResponse.redirect(new URL("/login", request.url));
        response.cookies.delete("login-user-cookie");
        return response;
    }

    if (authToken && request.nextUrl.pathname.startsWith("/login")) {
        const response = NextResponse.redirect(new URL("/dashboard", request.url));
        return response;
    }

    const handleI18nRouting = createMiddleware({
        // A list of all locales that are supported
        locales: ["en", "es"],
        // Used when no locale matches
        defaultLocale: "en",
        localeDetection: true,
        localePrefix: "never",
    });
    const response = handleI18nRouting(request);
    return response;
}

export const config = {
    matcher: [
        // This entry handles the root of the base
        // path and should always be included
        "/",
        // Match all pathnames except for
        // - … if they start with `/api`, `/_next` or `/_vercel`
        // - … the ones containing a dot (e.g. `favicon.ico`)
        "/((?!api|_next|_vercel|.*\\..*).*)",
        // However, match all pathnames within `/users`, optionally with a locale prefix
        "/([\\w-]+)?/users/(.+)",

        "/dashboard",
        "/login",
    ],
};
