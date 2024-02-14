"use client"

// @Reactjs
import { useTransition } from "react";

// @Components
import LanguageFlag from "./LanguageFlag";

// @Shadcn
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

// @Next-intl
import { useLocale } from "next-intl";

// @i!8n.ts
import { locales } from "@/i18n";

// @Navigation.ts
import { usePathname, useRouter } from "@/navigation";

// @Enums
import { ELanguages } from "@/enums/Languages";

const LanguageSelector = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const [isPending, startTransition] = useTransition();

    const onChangeHandler = (ISOLanguageCode: string) => {
        const nextLocale = ISOLanguageCode;
        startTransition(() => { router.replace(pathname, { locale: nextLocale }) });
    };

    return (
        <Select onValueChange={onChangeHandler} defaultValue={locale}>
            <SelectTrigger className="w-auto">
                <SelectValue placeholder="Select a timezone" />
            </SelectTrigger>
            <SelectContent>
                {locales.map((language) => (
                    <SelectItem key={language} value={language}>
                        <LanguageFlag language={language as ELanguages} />
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
};

export default LanguageSelector;
