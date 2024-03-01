import { useEffect } from "react";

// @React-hook-form
import { useForm } from "react-hook-form";

// @Nextjs
import { useRouter } from "next/navigation";

// @Zod
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// @Validation
import { LoginValidationSchema } from "@/lib/validation";

// @Constants
import { APPYENDA } from "@/constants/pages";

// @Appwrite
import { account } from "@/lib/appwrite/config";
import { checkUser } from "@/lib/appwrite/api";

const LoginViewModel = () => {
    const router = useRouter()

    useEffect(() => { 
        const verifySession = async () =>{
            const userSessionExists = await checkUser()
            if (userSessionExists?.id) {
                router.push(APPYENDA.DASHBOARD);
            }
        }
        verifySession()
    }, []);

    const form = useForm<z.infer<typeof LoginValidationSchema>>({
        resolver: zodResolver(LoginValidationSchema),
        defaultValues: {
            email: '',
            password: ''
        },
    });

    async function handleSignIn(values: z.infer<typeof LoginValidationSchema>) {
        const {email, password} = values
         try {
            const session = await account.createEmailSession(email, password);            
            checkUser()
            router.push(APPYENDA.DASHBOARD);
            return session
        } catch (error) {
            console.log("error +++++++***>", error);
            return {
                success: false,
                msg: 'Invalid credentials'
            }
        }
    }

    return {
        form,
        handleSignIn,
        APPYENDA
    };
};

export default LoginViewModel;
