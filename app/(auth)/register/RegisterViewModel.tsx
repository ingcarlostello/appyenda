// @React-hook-form
import { useForm } from "react-hook-form";

// @Zod
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// @Validation
import { RegistrationValidationSchema } from "@/lib/validation";

const RegisterViewModel = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof RegistrationValidationSchema>>({
    resolver: zodResolver(RegistrationValidationSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      username: "",
    },
  });

  // 2. Define a submit handler.
  async function handleSignIn(
    values: z.infer<typeof RegistrationValidationSchema>
  ) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return {
    form,
    handleSignIn,
  };
};

export default RegisterViewModel;
