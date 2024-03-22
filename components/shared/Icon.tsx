// @Nextjs
import Image, { StaticImageData } from "next/image";

interface IconProps {
    icon: StaticImageData;
    alt: string;
}

const Icon = ({ icon, alt }: IconProps) => {
    return <Image src={icon} alt={alt} />;
};

export default Icon;
