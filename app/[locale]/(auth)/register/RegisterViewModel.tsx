// @React-hook-form
import { useForm } from "react-hook-form";

// @Nextjs
import { useRouter } from "next/navigation";

// @Zod
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// @Validation
import { RegisterValidationSchema } from "@/lib/validation";



const RegisterViewModel = () => {

  const router = useRouter()

  // 1. Define your form.
  const form = useForm<z.infer<typeof RegisterValidationSchema>>({
    resolver: zodResolver(RegisterValidationSchema),
    defaultValues: {
      name: "",
      username: "",
      usertype: "",
      email: "",
      password: "",
      confirmPassword: "",
      checkbox: false,
    },
  });

  const handleSignUp = async (values: z.infer<typeof RegisterValidationSchema>) => {   
    try {

      const res = await fetch('api/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
      const data = await res.json();
      console.log('data -->', data);
      form.reset()
      if(data.success){
        return router.push("/dashboard");
      }

      // const getSession = await fetch('api/session')
      // console.log('getSession --->', getSession);
      

    } catch (error) {
      console.log('error +++++++>', error);
    }
  }

  return {
    form,
    handleSignUp,
  };
};

export default RegisterViewModel;
