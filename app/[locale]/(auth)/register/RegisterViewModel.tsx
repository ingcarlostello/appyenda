import { useState } from "react";

// @React-hook-form
import { useForm } from "react-hook-form";

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

const RegisterViewModel = () => {
  const t = useTranslations("ValidationRegisterPage");

  const [isDisabled, setIsDisabled] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

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
      setIsDisabled(true)
      setIsLoading(true)
      const res = await fetch(REGISTER_USER_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      console.log("data -->", data);
      form.reset();
      if (data.success) {
        setIsDisabled(false)
        setIsLoading(false)
        return router.push(APPYENDA.DASHBOARD);
      }
    } catch (error) {
      setIsDisabled(false)
      setIsLoading(false)
      console.log("error +++++++>", error);
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
