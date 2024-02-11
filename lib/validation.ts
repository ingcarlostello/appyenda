// @Zod
import { z } from "zod";

export const LoginValidationSchema = z.object({
  email: z.string().email("Email no valido"),
  password: z
    .string()
    .min(8, { message: "El password debe ser mínimo de 8 caracteres." }),
});

export const RegistrationValidationSchema = z
  .object({
    email: z.string().email("Email no valido"),
    password: z
      .string()
      .min(8, { message: "El password debe ser mínimo de 8 caracteres." }),
    confirmPassword: z.string(),
    name: z
      .string()
      .min(2, { message: "El nombre debe contener minimo 2 caracteres." })
      .max(50, { message: "El nombre debe contener maximo 50 caracteres." }),
    username: z
      .string()
      .min(2, {
        message: "El nombre de usurio debe contener minimo 2 caracteres.",
      })
      .max(50, {
        message: "El nombre de usuario debe contener maximo 2 caracteres.",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Contraseñas no son iguales",
    path: ["confirmPassword"],
  });
