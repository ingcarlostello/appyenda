// @React-hook-form
import { useForm } from "react-hook-form";

// @Zod
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// @Validation
import { LoginValidationSchema } from "@/lib/validation";

const LoginViewModel = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof LoginValidationSchema>>({
        resolver: zodResolver(LoginValidationSchema),
        defaultValues: {
            email: '',
            password: ''
        },
    });

    // 2. Define a submit handler.
    async function handleSignIn(values: z.infer<typeof LoginValidationSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return {
        form,
        handleSignIn,
    };
};

export default LoginViewModel;
