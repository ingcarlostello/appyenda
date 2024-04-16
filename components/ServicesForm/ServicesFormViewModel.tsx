// @React-hook-form
import { useForm } from "react-hook-form";

// @Lib
import { ServicesValidationSchema } from "@/lib/validation";

// @next-intl
import { useTranslations } from "next-intl";

// @Zod
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const ServicesFormViewModel = () => {

    const t = useTranslations("ServicesPage");

    const formSchema = ServicesValidationSchema(t);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
            duration: undefined,
            price: undefined,
            category: undefined,
        },
    });

    const handleAddService = (values: z.infer<typeof formSchema>) => {
        console.log('agrear servicio...');
    }

    return {
        form,
        handleAddService
    }
};

export default ServicesFormViewModel;