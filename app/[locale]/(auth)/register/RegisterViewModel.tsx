// @React-hook-form
import { useForm } from "react-hook-form";

// @Zod
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// @Validation
import { RegisterValidationSchema } from "@/lib/validation";
import { useTranslations } from "next-intl";

const RegisterViewModel = () => {
  const t = useTranslations("Validation");
  // Passing t as an argument for validation
  const formSchema = RegisterValidationSchema(t);
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      checkbox: false,
    },
  });

  // 2. Define a submit handler.
  async function handleSignUp(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return {
    form,
    handleSignUp,
  };
};

export default RegisterViewModel;
