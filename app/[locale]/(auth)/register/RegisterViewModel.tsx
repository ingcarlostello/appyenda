// @React-hook-form
import { useForm } from "react-hook-form";

// @Zod
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// @Validation
import { RegisterValidationSchema } from "@/lib/validation";
import { registerUser } from "@/lib/actions/auth.action";

const RegisterViewModel = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof RegisterValidationSchema>>({
    resolver: zodResolver(RegisterValidationSchema),
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
  async function handleSignUp(values: z.infer<typeof RegisterValidationSchema>) {
    console.log('--->', values);
    registerUser(values)
  }

  return {
    form,
    handleSignUp,
  };
};

export default RegisterViewModel;
