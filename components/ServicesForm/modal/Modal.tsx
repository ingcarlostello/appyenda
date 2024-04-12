// @Components
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogTrigger,
} from "@/components/ui/dialog";
import ServicesForm from "../ServicesForm";

// @Lucide icons
import { PlusCircleIcon } from "lucide-react";

// @Next-intl
import { useTranslations } from "next-intl";

export function ServicesModal() {

    const t = useTranslations("ServicesPage");

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="h-8 gap-1" size="sm">
                    <PlusCircleIcon className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        {t("ADD_SERVICE_BUTTON")}
                    </span>
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
                <div className="grid gap-4 py-4">
                    <ServicesForm />
                </div>
            </DialogContent>
        </Dialog>
    );
}
