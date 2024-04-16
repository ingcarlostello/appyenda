// @next-intl
import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";

// @React-hook-form
import { useForm } from "react-hook-form";

// @Zod
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// @Validation
import { ProfileValidationSchema } from "@/lib/validation";

const ProfileViewModel = () => {
	const t = useTranslations("ValidationProfilePage");
	const formSchema = ProfileValidationSchema(t);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			username: "",
			usertype: undefined,
			email: "",
			phone: undefined,
			location: "",
		},
	});

	const handleProfileUpdate = () => {
		const [isDisabled, setIsDisabled] = useState(true);
		const handleOnSubmit = (e: FormEvent<HTMLFormElement>): void => {
			e.preventDefault();
			isDisabled
				? setIsDisabled(!isDisabled)
				: (form.handleSubmit(handleProfileUpdate)(),
				  setIsDisabled(!isDisabled));
		};

		return { isDisabled, setIsDisabled, handleOnSubmit };
	};

	return {
		form,
		handleProfileUpdate,
	};
};

export default ProfileViewModel;
