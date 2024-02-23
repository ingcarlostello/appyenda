// @React-hook-form
import { useForm } from "react-hook-form";

// @Zod
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// @Validation
import { LoginValidationSchema } from "@/lib/validation";
import { account } from "@/lib/appwrite/config";

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
        try {
            await account.createEmailSession(values.email, values.password)            
        } catch (error) {
            console.log('error login: ',  error);         
        }
    }

    return {
        form,
        handleSignIn,
    };
};

export default LoginViewModel;
