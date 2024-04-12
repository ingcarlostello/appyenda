"use client";

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
import ServicesFormViewModel from "./ServicesFormViewModel";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

// @Constants
import { SERVICES_CATEGORIES } from "@/constants/pages";

// @Next-intl
import { useTranslations } from "next-intl";

const ServicesForm = () => {
    const { form, handleAddService } = ServicesFormViewModel();

    const t = useTranslations("ServicesPage");

    return (
        <div className="">
            <Form {...form}>
                <div className="flex justify-center">
                    <div className="bg-white p-8 w-full flex-center flex-col rounded-2xl">
                        <form
                            onSubmit={form.handleSubmit(handleAddService)}
                            className="flex flex-col gap-5 w-full mt-4"
                        >
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="shad-form_label">
                                            Nombre Servicio
                                        </FormLabel>
                                        <FormControl>
                                            <Input
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
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="shad-form_label">
                                            Descripcion
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea 
                                                placeholder="Descripcion del producto y/o servicio" 
                                                className="resize-none"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="duration"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="shad-form_label">Duracion</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                className="shad-input"
                                                {...field}
                                                placeholder="60"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="price"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="shad-form_label">Precio</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="number"
                                                className="shad-input"
                                                {...field}
                                                placeholder="150"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="shad-form_label">Precio</FormLabel>
                                        <FormControl>
                                            <Select>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue placeholder="Seleccione una categoria" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        {
                                                            SERVICES_CATEGORIES.map(category => (
                                                                <SelectItem value={`${category}`}>{category}</SelectItem>
                                                            ))
                                                        }
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="mt-8 flex justify-end">
                                <Button type="submit"> {t("ADD_SERVICE_BUTTON")}</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default ServicesForm;
