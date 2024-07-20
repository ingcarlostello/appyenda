import { NextRequest, NextResponse } from "next/server";

// @Next-intl
import createMiddleware from "next-intl/middleware";

// @Jose
import { jwtVerify } from "jose";

// @Constants
import { CustomJWTPayload, PROTECTED_ROUTES, RESTRICTED_PATHS, UserType } from "./constants/paths";
import { APPYENDA } from "./constants/pages";
import { BUSINESS, CLIENT } from "./constants/global";

const verifyToken = async (userToken: string): Promise<UserType | null> => {
	if (!userToken) {
		return null;
	}
	try {
		const { payload } = await jwtVerify(
			userToken,
			new TextEncoder().encode(process.env.NEXT_PUBLIC_SECRET_TOKEN as string)
		);
		return (payload as CustomJWTPayload).userType;
	} catch {
		return null;
	}
};

const startsWithAny = (path: string, prefixes: string[]): boolean => prefixes.some((prefix) => path.startsWith(prefix));

const authRedirectPaths = ["/register", "/login"];

export default async function middleware(request: NextRequest) {
	const userToken = request.cookies.get("userToken")?.value;
	const path = request.nextUrl.pathname;

	const userType = await verifyToken(userToken || "");

	if (!userToken && startsWithAny(path, PROTECTED_ROUTES)) {
		if (!userType) {
			return NextResponse.redirect(new URL("/login", request.url));
		}
	}

	if (userToken && startsWithAny(path, authRedirectPaths)) {
		if (userType === CLIENT) {
			return NextResponse.redirect(new URL(APPYENDA.CLIENT, request.url));
		} else if (userType === BUSINESS) {
			return NextResponse.redirect(new URL(APPYENDA.DASHBOARD, request.url));
		}
	}

	if (userType) {
		const restrictedForUser = RESTRICTED_PATHS[userType];
		if (restrictedForUser && startsWithAny(path, restrictedForUser)) {
			return NextResponse.redirect(new URL("/access-denied", request.url));
		}
	}

	const handleI18nRouting = createMiddleware({
		locales: ["en", "es", "pt"],
		defaultLocale: "en",
		localeDetection: true,
		localePrefix: "never",
	});

	return handleI18nRouting(request);
}

export const config = {
	matcher: [
		"/",
		"/((?!api|_next|_vercel|.*\\..*).*)",
		"/([\\w-]+)?/users/(.+)",
		"/dashboard/:path*",
		"/((?!api|_next/static|_next/image|favicon.ico).*)",
	],
};
