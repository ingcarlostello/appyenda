// @React-hook-form
import { useForm } from "react-hook-form";

// @Nextjs
import { useRouter } from "next/navigation";

// @Zod
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// @Validation
import { LoginValidationSchema } from "@/lib/validation";
import { account } from "@/lib/appwrite/config";

const LoginViewModel = () => {

    const router = useRouter()

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
        // try {
        //     await account.createEmailSession(values.email, values.password)            
        // } catch (error) {
        //     console.log('error login: ',  error);         
        // }

        try {

            const res = await fetch('api/session',{
                method: 'POST',
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })
            const data = await res.json();
            console.log('data ------>', data);
            
            if(data.success){
                return router.push("/dashboard");
              }
        } catch (error) {
            console.log('error +++++++***>', error);
        }
    }

    return {
        form,
        handleSignIn,
    };
};

export default LoginViewModel;
