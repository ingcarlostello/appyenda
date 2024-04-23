// @Nextjs component
import Image from "next/image";

// @Assets
import usaFlag from "../../app/assets/language-flags/usa-flag.png";
import spainFlag from "../../app/assets/language-flags/spain-flag.png";
import portugalFlag from "../../app/assets/language-flags/portugal-flag.png";

// @next-intl
import { useTranslations } from "next-intl";

// @Enums
import { ELanguages } from "@/enums/Languages";
import { Flag } from "lucide-react";

const languageFlags = {
	en: { flag: usaFlag, alt: "English" },
	es: { flag: spainFlag, alt: "Spanish" },
	pt: { flag: portugalFlag, alt: "Portuguese" },
};

interface ILanguageFlagProps {
	language: ELanguages;
}

const LanguageFlag = ({ language }: ILanguageFlagProps) => {
	const t = useTranslations("LanguageSelector");
	const { flag, alt } = languageFlags[language] || {};
	return flag ? (
		<div className="flex justify-around">
			<span>{language}</span>
			<span className="ml-4">
				<Image alt={alt} src={flag} width={23} />
			</span>
		</div>
	) : null;
};

export default LanguageFlag;
