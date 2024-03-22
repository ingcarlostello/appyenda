import { useState } from "react";

// @React-hook-form
import { useForm } from "react-hook-form";

// Shadcn
import { useToast } from "@/components/ui/use-toast";

// @Nextjs
import { useRouter } from "next/navigation";

// @Zod
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// @Validation
import { RegisterValidationSchema } from "@/lib/validation";

// @Constants
import { REGISTER_USER_API } from "@/constants/urls";
import { APPYENDA } from "@/constants/pages";

// @next-intl
import { useTranslations } from "next-intl";

// @Components
import Icon from "../shared/Icon";

// @Assets
import goodIcon from "../../app/assets/icons/goodIcon.png";
import faceFail from "../../app/assets/icons/face-fail.png";

const RegisterViewModel = () => {
  const t = useTranslations("ValidationRegisterPage");
  const t2 = useTranslations("RegisterPage");

  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { toast } = useToast();

  const router = useRouter();

  const formSchema = RegisterValidationSchema(t);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      usertype: undefined,
      email: "",
      password: "",
      confirmPassword: "",
      checkbox: false,
    },
  });

  const handleSignUp = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsDisabled(true);
      setIsLoading(true);
      const res = await fetch(REGISTER_USER_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      form.reset();

      if (data.success === false) {
        setIsDisabled(false);
        setIsLoading(false);
        toast({
          description: t2('USER_ALREADY_EXIST'),
          action: <Icon icon={faceFail} alt={"already registered"} />,
          variant: "destructive",
        });
        return;
      }

      if (data.success) {
        setIsDisabled(false);
        setIsLoading(false);
      }
      toast({
        description: t2("SUCCESSFUL_REGISTRATION"),
        action: <Icon icon={goodIcon} alt={"good"} />,
      });
      router.push(APPYENDA.LOGIN);
    } catch (error) {
      setIsDisabled(false);
      setIsLoading(false);
      console.log("error -----+++++++>", error);
    }
  };

  return {
    APPYENDA,
    form,
    handleSignUp,
    isDisabled,
    isLoading,
  };
};

export default RegisterViewModel;
