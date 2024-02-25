"use client";
// @Nextjs
import Image from "next/image";
import Link from "next/link";

// @Shadcn
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// @View Models
import LoginViewModel from "./LoginViewModel";

// @Assets
import logo from "../../../assets/APPYENDA_hr_logo.webp";

// @Next-intl
import { useTranslations } from "next-intl";

const Login = () => {
  const { form, handleSignIn } = LoginViewModel();

  const t = useTranslations("LoginPage");

  return (
    <div className="min-h-screen grid content-center">
      <Form {...form}>
        <div className="flex justify-center">
          <div className="bg-white md:w-3/6 lg:w-3/6 xl:w-1/4 p-8 md:shadow-2xl flex-center flex-col rounded-2xl">
            <div className="flex justify-center mb-4">
              <Image src={logo} alt="Appyenda-logo" width={250} height={250} />
            </div>
            <form
              onSubmit={form.handleSubmit(handleSignIn)}
              className="flex flex-col gap-5 w-full mt-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">Email</FormLabel>
                    <FormControl>
                      <Input type="text" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className="shad-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="shad-button_primary">
                {t("LogIn")}
              </Button>

              <p className="text-small-regular text-light-2 text-center mt-2">
                {t("DONT_HAVE_ACCOUNT")}{" "}
                <Link className="underline" href={"/register"}>
                  {t("SIGN_UP")}
                </Link>
              </p>
            </form>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Login;
