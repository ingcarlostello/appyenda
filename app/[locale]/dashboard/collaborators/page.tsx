"use client"

// @Components
import { CollaboratorsModal } from "@/components/collaboratorsForm/modal/CollaboratorsModal";
import CollaboratorsTable from "@/components/shared/collaboratorsTable/CollaboratorsTable";

// @Next-intl
import { useTranslations } from "next-intl";

const Collaborators = () => {
    const t = useTranslations("CollaboratorsPage")

    return (
        <div>
            <p className="xs:text-2xl xs:font-bold md:text-4xl md:font-bold lg:text-4xl lg:font-bold">
                {t("COLLABORATORS")}
            </p>
            <div className="flex justify-end pr-4">
                <CollaboratorsModal />
            </div>
            <div className="mt-8">
                <CollaboratorsTable />
            </div>
        </div>
    );
};

export default Collaborators;