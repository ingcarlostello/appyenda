"use client";

// @Next-intl
import { useTranslations } from "next-intl";



const Register = () => {

    const t = useTranslations('RegisterPage');




    return <div>{t('REGISTER')}</div>;
};

export default Register;
