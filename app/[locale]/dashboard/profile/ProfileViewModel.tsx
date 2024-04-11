// @React-hook-form
import { useForm } from "react-hook-form";

// @Zod
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// @Validation
import {
	ProfileValidationSchema,
	RegisterValidationSchema,
} from "@/lib/validation";

// @next-intl
import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";

const ProfileViewModel = () => {
	const t = useTranslations("ValidationRegisterPage");
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
		const handleOnSubmit = function (e: FormEvent<HTMLFormElement>) {
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
