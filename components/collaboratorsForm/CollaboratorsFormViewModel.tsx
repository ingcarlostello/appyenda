import { useState } from "react";

// hooks
import { useForm } from "react-hook-form";
import { useAuthStore } from "@/stores/auth.store";
import { useTranslations } from "next-intl";
import { useToast } from "@/components/ui/use-toast";

// @Zod
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// @Lib
import { CollaboratorsValidationSchema } from "@/lib/validation";

// @Server Actinons
import { saveCollaborator } from "@/lib/actions/collaborators.actions";

// @Assets
import goodIcon from "../../app/assets/icons/goodIcon.png";
import badIcon from "../../app/assets/icons/badIcon.png";

// @Components
import Icon from "@/components/shared/Icon";

const CollaboratorsFormViewModel = () => {
    const { toast } = useToast();
    const providerId = useAuthStore((state) => state.userProviderDocumentId);
    const t = useTranslations("CollaboratorsPage");

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    const formSchema = CollaboratorsValidationSchema(t);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
        },
    });

    const handleSubmitCollaborator = async (
        values: z.infer<typeof formSchema>
    ) => {
        setIsDisabled(true);
        setIsLoading(true);
        try {
            const result = await saveCollaborator(values, providerId);

            if (result.$id) {
                toast({
                    description: t("ADDED_COLLABORATOR"),
                    action: <Icon icon={goodIcon} alt={"good"} />,
                });
            } else {
                toast({
                    description: t("UNADDED_COLLABORATOR"),
                    action: <Icon icon={badIcon} alt={"bad"} />,
                });
            }
        } catch (error) {
            console.log(error);
        } finally {
            form.reset();
            setIsDisabled(false);
            setIsLoading(false);
        }
    };

    return {
        form,
        handleSubmitCollaborator,
        isDisabled,
        isLoading,
    };
};

export default CollaboratorsFormViewModel;
