// @Zod
import { z } from "zod";

export const LoginValidationSchema = (t: (arg: string) => string) =>
	z.object({
		email: z.string().email(t("INVALID_EMAIL")),
		password: z.string().min(8, { message: t("PASSWORD_MIN_LENGTH") }),
	});

export const RegisterValidationSchema = (t: (arg: string) => string) =>
	z
		.object({
			name: z
				.string()
				.min(2, { message: t("NAME_MIN_LENGTH") })
				.max(50, { message: t("NAME_MAX_LENGTH") }),
			username: z
				.string()
				.min(2, {
					message: t("USER_NAME_MIN_LENGTH"),
				})
				.max(50, {
					message: t("USER_NAME_MAX_LENGTH"),
				}),
			usertype: z.enum(["client", "business"], {
				required_error: t("MISSING_USER_TYPE"),
			}),
			email: z.string().email(t("INVALID_EMAIL")),
			password: z.string().min(8, { message: t("PASSWORD_MIN_LENGTH") }),
			confirmPassword: z.string(),
			checkbox: z.boolean().default(false).optional(),
		})
		.refine((data) => data.password === data.confirmPassword, {
			message: t("CONFIRM_PASSWORD"),
			path: ["confirmPassword"],
		})
		.refine((data) => data.checkbox === true, {
			message: t("ACCEPT_TERMS_AND_CONDITIONS"),
			path: ["checkbox"],
		});




export const ServicesValidationSchema = (t: (arg: string) => string) =>
	z.object({
		name: z
			.string()
			.min(4, { message: t("SERVICE_NAME_MIN_LENGTH") })
			.max(30, { message: t("SERVICE_NAME_MAX_LENGTH") }),
		description: z
			.string()
			.min(10, { message: t("DESCRIPTION_MIN_LENGTH") })
			.max(500, { message: t("DESCRIPTION_MAX_LENGTH") }),
		duration: z.coerce
			.number()
			.min(1, { message: t("DURATION_VALIDATION_MESSAGE") }),
		price: z.coerce.number().min(1, { message: t("PRICE_VALIDATION_MESSAGE") }),
		category: z.string({ required_error: t("SELECT_CATEGORY") }),
	});










export const ProfileValidationSchema = (t: (arg: string) => string) =>
	z.object({
		name: z
			.string()
			.min(2, { message: t("NAME_MIN_LENGTH") })
			.max(50, { message: t("NAME_MAX_LENGTH") }),
		username: z
			.string()
			.min(2, {
				message: t("USER_NAME_MIN_LENGTH"),
			})
			.max(50, {
				message: t("USER_NAME_MAX_LENGTH"),
			}),
		usertype: z.enum(["client", "business"], {
			required_error: t("MISSING_USER_TYPE"),
		}),
		email: z.string().email(t("INVALID_EMAIL")),
		phone: z
			.number({
				required_error: t("PHONE_REQUIRED"),
				invalid_type_error: t("INVALID_PHONE"),
			})
			.positive(),
		location: z
			.string()
			.min(2, { message: t("LOCATION_MIN_LENGTH") })
			.max(50, { message: t("LOCATION_MAX_LENGTH") }),
	});
