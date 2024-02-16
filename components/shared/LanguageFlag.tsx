// @Nextjs component
import Image from "next/image";

// @Assets
import usaFlag from "../../app/assets/language-flags/usa-flag.png";
import spainFlag from "../../app/assets/language-flags/spain-flag.png";

// @next-intl
import { useTranslations } from "next-intl";

// @Enums
import { ELanguages } from "@/enums/Languages";

const languageFlags = {
  en: { flag: usaFlag, alt: "English" },
  es: { flag: spainFlag, alt: "Spanish" },
};

interface ILanguageFlagProps {
  language: ELanguages;
}

const LanguageFlag = ({ language }: ILanguageFlagProps) => {
  const t = useTranslations("LanguageSelector");
  const { flag, alt } = languageFlags[language] || {};
  return flag ? (
    <div className="flex justify-around">
      <span>{t("locale", { locale: language })}</span>
      <span className="ml-4">
        <Image alt={alt} src={flag} width={23} />
      </span>
    </div>
  ) : null;
};

export default LanguageFlag;
