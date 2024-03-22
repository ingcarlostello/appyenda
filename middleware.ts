// @next-intl
import createMiddleware from "next-intl/middleware";

// @Nextjs
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
    const authToken = request.cookies.get("login-user-cookie")?.value;
    const initialSocialCookie = request.cookies.get("initial-social-cookie")?.value;

    const path = request.nextUrl.pathname;

    if (!authToken && !initialSocialCookie && path === "/dashboard") {
        NextResponse.next().cookies.delete('login-user-cookie')
        NextResponse.next().cookies.delete('initial-social-cookie')
        NextResponse.next().cookies.delete('social-account-cookie')
        const response = NextResponse.redirect(new URL("/login", request.url));
        return response;
    }

    if (request.cookies.has("initial-social-cookie") && request.nextUrl.pathname.startsWith("/login") && !authToken) {
        const response = NextResponse.redirect(new URL("/dashboard", request.url));
        return response;
    }

    if (request.cookies.has("social-account-cookie") && request.nextUrl.pathname.startsWith("/register")) {
        const response = NextResponse.redirect(new URL("/dashboard", request.url));
        return response;
    }

    if (authToken && request.nextUrl.pathname.startsWith("/register")) {
        const response = NextResponse.redirect(new URL("/dashboard", request.url));
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

        "/dashboard/:path*",
        // "/login",
    ],
};
