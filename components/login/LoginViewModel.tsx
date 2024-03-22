import { useEffect, useState } from "react";

// @React-hook-form
import { useForm } from "react-hook-form";

// Shadcn
import { useToast } from "@/components/ui/use-toast";

// @Components
import Icon from "@/components/shared/Icon";

// @Nextjs
import { useRouter } from "next/navigation";

// @Zod
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// @Validation
import { LoginValidationSchema } from "@/lib/validation";

// @Constants
import { APPYENDA } from "@/constants/pages";

// @next-int
import { useTranslations } from "next-intl";

// @Appwrite
import { account } from "@/lib/appwrite/config";
import { checkUser } from "@/lib/appwrite/api";

// @Js-cookie
import Cookies from "js-cookie";

// @Libs
import { extractCookieInfo } from "@/lib/auth";

// @Assets
import goodIcon from "../../app/assets/icons/goodIcon.png";
import badIcon from "../../app/assets/icons/badIcon.png";

const LoginViewModel = () => {
    const t = useTranslations("ValidationRegisterPage");
    const t2 = useTranslations("LoginPage");
    
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    const { toast } = useToast();
    const router = useRouter();

    const formSchema = LoginValidationSchema(t);

    useEffect(() => {
        const verifySession = async () => {
            const userSessionExists = await checkUser();

            console.log('userSessionExists', userSessionExists);
            
            if (userSessionExists?.id) {
                router.push(APPYENDA.DASHBOARD);
            }
        };
        verifySession();
    }, []);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    async function handleSignIn(values: z.infer<typeof formSchema>) {
        const { email, password } = values;
        try {
            setIsDisabled(true);
            setIsLoading(true);
            const session = await account.createEmailSession(email, password);
            await checkUser();
            const getCookie = window.localStorage.getItem("cookieFallback");
            const parsedCookie = JSON.parse(getCookie!);
            const cookieInfo = extractCookieInfo(parsedCookie);
            Cookies.set("login-user-cookie", cookieInfo.infoCookie);
            router.push(APPYENDA.DASHBOARD);
            toast({
                description: t2("SUCCESSFUL_LOGGING_IN"),
                action: <Icon icon={goodIcon} alt={"good"} />,
            });
            return session;
        } catch (error) {
            setIsDisabled(false);
            setIsLoading(false);
            return toast({
                variant: "destructive",
                description: t2("INVALID_CREDENTIALS"),
                action: <Icon icon={badIcon} alt={"bad"} />,
            });
        }
    }

    return {
        APPYENDA,
        form,
        handleSignIn,
        isDisabled,
        isLoading,
        toast,
    };
};

export default LoginViewModel;
