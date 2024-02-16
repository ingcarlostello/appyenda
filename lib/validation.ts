// @Zod
import { z } from "zod";

// @Next-intl
import { useTranslations } from "next-intl";

export const LoginValidationSchema = z.object({
  email: z.string().email("Email no valido"),
  password: z
    .string()
    .min(8, { message: "El password debe ser mínimo de 8 caracteres." }),
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
      email: z.string().email(t("EMAIL")),
      password: z.string().min(8, { message: t("PASSWORD") }),
      confirmPassword: z.string(),
      checkbox: z.boolean().default(false).optional(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("CONFIRM_PASSWORD"),
      path: ["confirmPassword"],
    })
    .refine((data) => data.checkbox === true, {
      message: t("TERMS"),
      path: ["checkbox"],
    });
