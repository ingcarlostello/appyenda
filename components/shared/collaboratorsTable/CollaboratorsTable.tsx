// @Shadcn
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

// @Next-intl
import { useTranslations } from "next-intl";

const CollaboratorsTable = () => {
    const t = useTranslations("CollaboratorsPage");
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>{t("NAME")}</TableHead>
                        <TableHead>{t("EMAIL")}</TableHead>
                        <TableHead>{t("PHONE_NUMBER")}</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {
                        <TableRow>
                            <TableCell className="font-medium">Carlos Tello</TableCell>
                            <TableCell className="hidden md:table-cell">
                                carlos@correo.com
                            </TableCell>
                            <TableCell className="hidden md:table-cell">3186665358</TableCell>
                        </TableRow>
                    }
                </TableBody>
            </Table>
        </div>
    );
};

export default CollaboratorsTable;
