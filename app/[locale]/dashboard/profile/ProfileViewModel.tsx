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
import { useState } from "react";

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
		// Here will go data handling for the profile update
	};

	return {
		form,
		handleProfileUpdate,
	};
};

export default ProfileViewModel;
