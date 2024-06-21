// @React-hook-form
import { useForm } from "react-hook-form";

// @Zod
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// @Lib
import { CollaboratorsValidationSchema } from "@/lib/validation";

// @next-intl
import { useTranslations } from "next-intl";

const CollaboratorsFormViewModel = () => {

    const t = useTranslations("CollaboratorsPage");

    const formSchema = CollaboratorsValidationSchema(t);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: undefined,
        },
    });

    return {
        form
    }

};

export default CollaboratorsFormViewModel;