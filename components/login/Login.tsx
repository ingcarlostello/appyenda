"use client";
// @Nextjs
import Image from "next/image";
import Link from "next/link";

// @Lucide-react
import { Loader2 } from "lucide-react";

// @Components
import GoogleButton from "../shared/GoogleButton";

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
import { PasswordInput } from "@/components/ui/password-input";

// @View Models
import LoginViewModel from "./LoginViewModel";

// @Assets
import logo from "../../app/assets/APPYENDA_hr_logo.webp";

// @Next-intl
import { useTranslations } from "next-intl";

const Login = () => {
  const { form, handleSignIn, APPYENDA, isDisabled, isLoading } =
    LoginViewModel();

  const t = useTranslations("LoginPage");

  return (
    <div className="min-h-screen grid content-center">
      <Form {...form}>
        <div className="flex justify-center">
          <div className="bg-white md:w-3/6 lg:w-3/6 xl:w-1/4 p-8 md:shadow-2xl flex-center flex-col rounded-2xl">
            <div className="flex justify-center mb-4">
              <Image priority={true} src={logo} alt="Appyenda-logo" width={250} height={250}/>
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
                    <FormLabel className="shad-form_label">
                      {t("EMAIL")}
                    </FormLabel>

                    <FormControl>
                      <Input
                        disabled={isDisabled}
                        type="text"
                        className="shad-input"
                        {...field}
                      />
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
                    <FormLabel className="shad-form_label">
                      {t("PASSWORD")}
                    </FormLabel>

                    <FormControl>
                      <PasswordInput
                        disabled={isDisabled}
                        {...field}
                        placeholder="********"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                disabled={isDisabled}
                type="submit"
                className="shad-button_primary"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                    {t("LOGGING_IN")}{" "}
                  </>
                ) : (
                  t("LogIn")
                )}
              </Button>

              <div className="mt-8">
                <fieldset className="border-t border-slate-300 mb-5">
                  <legend className="mx-auto px-4 italic">
                    {t("lOG_IN_WITH")}
                  </legend>
                </fieldset>
                <div className="text-center">
                  <GoogleButton disabled={isDisabled} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </Form>

      <p className="text-small-regular text-light-2 text-center mt-10">
        {t("DONT_HAVE_ACCOUNT")}{" "}
        <Link className="underline" href={APPYENDA.REGISTER}>
          {t("SIGN_UP")}
        </Link>
      </p>
    </div>
  );
};

export default Login;
