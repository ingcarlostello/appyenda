"use client";

// @Shadcn
import {
	Form,
	FormControl,
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
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

// @Constants
import { SERVICES_CATEGORIES } from "@/constants/pages";

// @Next-intl
import { useTranslations } from "next-intl";

// @api
import { Loader2 } from "lucide-react";

const ServicesForm = () => {
    const { form, handleAddService, isDisabled, isLoading } = ServicesFormViewModel();

	const t = useTranslations("ServicesPage");

    return (
        <div>
            <Form {...form}>
                <div className="flex justify-center">
                    <div className="p-8 w-full flex-center flex-col rounded-2xl">
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
                                            {t("NAME")}
                                        </FormLabel>
                                        <FormControl>
                                            <Input disabled={isDisabled} type="text" className="shad-input" {...field} />
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
                                            {t("DESCRIPTION")}
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea
                                                disabled={isDisabled}
                                                placeholder={t("DESCRIPTION_PLACEHOLDER")}
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
                                        <FormLabel className="shad-form_label">
                                            {t("DURATION")} <span className="text-xs">({t("MINUTES")})</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isDisabled}
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
                                        <FormLabel className="shad-form_label">
                                            {t("PRICE")}
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                disabled={isDisabled}
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
                                        <FormLabel className="shad-form_label">
                                            {t("CATEGORY")}
                                        </FormLabel>
                                        <FormControl>
                                            <Select disabled={isDisabled} onValueChange={field.onChange} value={field.value}>
                                                <SelectTrigger className="w-full">
                                                    {field.value ? <SelectValue placeholder={t("SELECT_CATEGORY")} /> : t("SELECT_CATEGORY")}
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        {SERVICES_CATEGORIES.map((category, index) => (
                                                            <SelectItem key={index} value={`${category}`}>
                                                                {category}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="mt-8 flex justify-end">
                                <Button disabled={isDisabled} type="submit">
                                    {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> {t("ADDING_SERVICE")} </> : t("ADD_SERVICE_BUTTON")}
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default ServicesForm;
