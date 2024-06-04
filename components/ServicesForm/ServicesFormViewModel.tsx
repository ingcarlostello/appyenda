import { useState } from "react";

// @React-hook-form
import { useForm } from "react-hook-form";

// @Lib
import { ServicesValidationSchema } from "@/lib/validation";

// @next-intl
import { useTranslations } from "next-intl";

// @Zod
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// @Constants
import { SERVICES_API } from "@/constants/urls";

// @Store
import { useAuthStore } from "@/stores/auth.store";

// Shadcn
import { useToast } from "@/components/ui/use-toast";

// @Components
import Icon from "@/components/shared/Icon";

// @Assets
import goodIcon from "../../app/assets/icons/goodIcon.png";
import { useServicesStore } from "@/stores/services.store";

const ServicesFormViewModel = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    const addNewService = useServicesStore((state) => state.addService);

    const { toast } = useToast();

    const providerId = useAuthStore((state) => state.userId);

    const t = useTranslations("ServicesPage");

    const formSchema = ServicesValidationSchema(t);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            duration: 0,
            price: 0,
            category: undefined,
        },
    });

    const handleAddService = async (values: z.infer<typeof formSchema>) => {
        addNewService(values)
        try {
            setIsDisabled(true);
            setIsLoading(true);
            const res = await fetch(SERVICES_API, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...values,
                    provider: providerId,
                }),
            });

            const data = await res.json();
            
            if (data.success) {
                setIsDisabled(false);
                setIsLoading(false);
            }
            toast({
                description: t("ADDED_SERVICE"),
                action: <Icon icon={goodIcon} alt={"good"} />,
            });
            form.reset();
        } catch (error) { 
            setIsDisabled(false);
            setIsLoading(false);
        }
    };

    return {
        form,
        handleAddService,
        isDisabled,
        isLoading,
    };
};

export default ServicesFormViewModel;
