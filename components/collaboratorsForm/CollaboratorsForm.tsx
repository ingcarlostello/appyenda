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
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

// @View Model
import CollaboratorsFormViewModel from "./CollaboratorsFormViewModel";

// @Next-intl
import { useTranslations } from "next-intl";

const CollaboratorsForm = () => {
	const { form, handleSubmitCollaborator, isDisabled, isLoading } = CollaboratorsFormViewModel();

	const t = useTranslations("CollaboratorsPage");

	return (
		<div>
			<Form {...form}>
				<div className="flex justify-center">
					<div className="p-8 w-full flex-center flex-col rounded-2xl">
						<form
							onSubmit={form.handleSubmit(handleSubmitCollaborator)}
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
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="shad-form_label">
											{" "}
											{t("EMAIL")}
										</FormLabel>
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
								name="phone"
								disabled={isDisabled}
								render={({ field }) => (
									<FormItem>
										<FormLabel> {t("PHONE_NUMBER")}</FormLabel>
										<FormControl>
											<Input placeholder="1234567890" {...field} />
										</FormControl>

										<FormMessage />
									</FormItem>
								)}
							/>

							<div className="mt-8 flex justify-end">
								<Button disabled={isDisabled} type="submit">
									{isLoading ? (
										<>
											<Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
											{t("ADDING_COLLABORATOR")}{" "}
										</>
									) : (
										t("ADD_COLLABORATOR")
									)}
								</Button>
							</div>
						</form>
					</div>
				</div>
			</Form>
		</div>
	);
};

export default CollaboratorsForm;
