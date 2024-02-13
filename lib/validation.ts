// @Zod
import { z } from "zod";

export const LoginValidationSchema = z.object({
  email: z.string().email("Email no valido"),
  password: z
    .string()
    .min(8, { message: "El password debe ser mínimo de 8 caracteres." }),
});

export const RegisterValidationSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "El nombre debe contener mínimo 2 caracteres." })
      .max(50, { message: "El nombre debe contener maximo 50 caracteres." }),
    username: z
      .string()
      .min(2, {
        message: "El nombre de usuario debe contener mínimo 2 caracteres.",
      })
      .max(50, {
        message: "El nombre de usuario debe contener maximo 2 caracteres.",
      }),
    email: z.string().email("Email no válido"),
    password: z
      .string()
      .min(8, { message: "El password debe ser mínimo de 8 caracteres." }),
    confirmPassword: z.string(),
    checkbox: z.boolean().default(false).optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Contraseñas no son iguales",
    path: ["confirmPassword"],
  })
  .refine((data) => data.checkbox === true, {
    message: "Debe aceptar los términos y condiciones",
    path: ["checkbox"],
  });
