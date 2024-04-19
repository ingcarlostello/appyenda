import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "es", "pt"] as const;

export const pathnames = {
	"/": "/",
	"/pathnames": {
		en: "/pathnames",
		es: "/ruta",
		pt: "/ruta",
	},
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
