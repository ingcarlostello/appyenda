// @Zod
import { z } from "zod";

export const LoginValidationSchema = z.object({
    email: z.string().email('Email no valido'),
    password: z.string().min(8, { message: 'El password debe ser mínimo de 8 caracteres.' }),
});