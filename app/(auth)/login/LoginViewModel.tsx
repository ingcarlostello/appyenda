// @React-hook-form
import { useForm } from "react-hook-form";

// @Zod
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// @Validation
import { LoginValidation } from "@/lib/validation";

const LoginViewModel = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof LoginValidation>>({
        resolver: zodResolver(LoginValidation),
        defaultValues: {
            email: '',
            password: ''
        },
    });

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof LoginValidation>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
    }

    return {
        form,
        onSubmit,
    };
};

export default LoginViewModel;
