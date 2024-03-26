"use client";

// @Nextjs
import Image from "next/image";
import Link from "next/link";

// @Lucide-react
import { Loader2 } from "lucide-react";

// @Shadcn
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// @View Models
import RegisterViewModel from "./RegisterViewModel";

// @Next-intl
import { useTranslations } from "next-intl";

// @Assets
import logo from "../../app/assets/APPYENDA_hr_logo.webp";
import GoogleButton from "../shared/GoogleButton";

const Register = () => {
  const { form, handleSignUp, APPYENDA, isDisabled, isLoading } = RegisterViewModel();

  const t = useTranslations("RegisterPage");

  return (
    <div className="min-h-screen grid content-center">
      <Form {...form}>
        <div className="flex justify-center">
          <div className="bg-white md:w-3/6 lg:w-3/6 xl:w-1/4 p-8 md:shadow-2xl flex-center flex-col rounded-2xl">
            <div className="flex justify-center mb-4">
              <Image
                src={logo}
                alt="Appyenda-logo"
                width={250}
                height={250}
                className=""
                priority={true}
              />
            </div>
            <form
              onSubmit={form.handleSubmit(handleSignUp)}
              className="flex flex-col gap-5 w-full mt-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">
                      {t("NAME")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="shad-input"
                        {...field}
                        placeholder="John Doe"
                        disabled={isDisabled}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">
                      {t("USER_NAME")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="shad-input"
                        {...field}
                        placeholder={t("NAME_TO_RECOGNIZE")}
                        disabled={isDisabled}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="usertype"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>{t("USER_TYPE")}</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex gap-11 space-y-1"
                        disabled={isDisabled}
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="client" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {t("CLIENT")}
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="business" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {t("BUSINESS_OWNER")}
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        className="shad-input"
                        {...field}
                        placeholder="john@ejemplo.com"
                        disabled={isDisabled}
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
                      <PasswordInput {...field} placeholder="********" disabled={isDisabled} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="shad-form_label">
                      {t("CONFIRM_PASSWORD")}
                    </FormLabel>
                    <FormControl>
                      <PasswordInput {...field} placeholder="********" disabled={isDisabled} />
                    </FormControl>
                    {form.formState.errors.confirmPassword && (
                      <FormMessage>
                        {form.formState.errors.confirmPassword.message}
                      </FormMessage>
                    )}
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="checkbox"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md ">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        disabled={isDisabled}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        <Link className="underline" href="/examples/forms">
                          {t("ACCEPT_TERMS_AND_CONDITIONS")}
                        </Link>{" "}
                      </FormLabel>
                      <FormDescription></FormDescription>
                      {form.formState.errors.checkbox && (
                        <p>{form.formState.errors.checkbox.message}</p>
                      )}
                    </div>
                  </FormItem>
                )}
              />

              <Button disabled={isDisabled} type="submit" className="shad-button_primary">
                {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> {t("REGISTERING")} </> : t("REGISTER")}
              </Button>

              <div className="mt-8">
                <fieldset className="border-t border-slate-300 mb-5">
                  <legend className="mx-auto px-4 italic">
                    {t("REGISTER_WITH")}
                  </legend>
                </fieldset>
                <div className="text-center">
                  <GoogleButton disabled={isDisabled}/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Form>

      <p className="text-small-regular text-light-2 text-center mt-10 mb-10">
        {t("ALREADY_REGISTERED")}{" "}
        <Link className="underline" href={APPYENDA.LOGIN}>
          {t("LOG_IN")}
        </Link>
      </p>
    </div>
  );
};

export default Register;
