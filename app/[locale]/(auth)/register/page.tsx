"use client";

// @Nextjs
import Image from "next/image";
import Link from "next/link";

// @Shadcn
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

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

// @View Models
import RegisterViewModel from "./RegisterViewModel";

// @Assets
import logo from "../../../assets/logo-white.png";

const Register = () => {
    const { form, handleSignUp } = RegisterViewModel();

    return (
        <div className="min-h-screen grid content-center">
            <Form {...form}>
                <div className="flex justify-center">
                    <div className="bg-white md:w-3/6 lg:w-3/6 xl:w-1/4 p-8 md:shadow-2xl flex-center flex-col rounded-2xl">
                        <div className="flex justify-center mb-4">
                            <Image src={logo} alt="Appyenda-logo" width={250} height={250} />
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
                                        <FormLabel className="shad-form_label">Nombre</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                className="shad-input"
                                                {...field}
                                                placeholder="John Doe"
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
                                            Nombre de usuario
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                className="shad-input"
                                                {...field}
                                                placeholder="Nombre con el que te reconocerán"
                                            />
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
                                            Contraseña
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                className="shad-input"
                                                {...field}
                                                placeholder="********"
                                            />
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
                                            Confirma tu contraseña
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                className="shad-input"
                                                {...field}
                                                placeholder="********"
                                            />
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
                                            />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel>
                                                Acepto los{" "}
                                                <Link className="underline" href="/examples/forms">
                                                    términos y condiciones
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

                            <Button type="submit" className="shad-button_primary">
                                Crear cuenta
                            </Button>
                        </form>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default Register;
