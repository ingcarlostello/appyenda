import createMiddleware from "next-intl/middleware";


export default createMiddleware({
    // A list of all locales that are supported
    locales: ["en", "es"],
    // Used when no locale matches
    defaultLocale: "en",
    localeDetection: true,
    localePrefix: "never",
});

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
    ],
};
