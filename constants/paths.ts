import { JWTPayload } from "jose";

export type UserType = "business" | "client";

export interface CustomJWTPayload extends JWTPayload {
	userType: UserType;
}

export const RESTRICTED_PATHS: Record<UserType, string[]> = {
	business: ["/user/client"],
	client: [
		"/dashboard",
		"/dashboard/calendar",
		"/dashboard/collaborators",
		"/dashboard/profile",
		"/dashboard/services",
	],
};

export const PROTECTED_ROUTES = [
	"/dashboard",
	"/dashboard/calendar",
	"/dashboard/collaborators",
	"/dashboard/profile",
	"/dashboard/services",
	"/user/client",
];