"use client";

// @Shadcn
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// @View Models
import LoginViewModel from "./LoginViewModel";

const Login = () => {
    const { form, onSubmit } = LoginViewModel();

    return (
        <div className="min-h-screen grid content-center">
            <Form {...form}>
                <div className="flex justify-center">
                    <div className="bg-white w-1/4 p-8 shadow-2xl flex-center flex-col rounded-2xl">
                        <form
                            // onSubmit={form.handleSubmit(handleSignin)}
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
                                Log in
                            </Button>

                            <p className="text-small-regular text-light-2 text-center mt-2">
                                No tienes una cuenta? Regístrate
                            </p>
                        </form>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default Login;
