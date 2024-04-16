// @Shadcn
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

// @Next-intl
import { useTranslations } from "next-intl";



const ListTable = () => {
    const x = [1, 2, 3, 4, 5];
    const t = useTranslations("ServicesPage");

    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>{t("NAME")}</TableHead>
                        <TableHead className="hidden md:table-cell">{t("DESCRIPTION")}</TableHead>
                        <TableHead>{t("DURATION")}</TableHead>
                        <TableHead>{t("PRICE")}</TableHead>
                        <TableHead className="hidden md:table-cell">{t("CATEGORY")}</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {x.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium">Cancha 1</TableCell>
                            <TableCell className="w-6/12 hidden md:table-cell">
                                Curabitur non velit vitae urna dignissim fermentum. Proin nec
                                suscipit dui, eget volutpat justo.
                            </TableCell>
                            <TableCell>60 min</TableCell>
                            <TableCell>$ 120.000</TableCell>
                            <TableCell className="hidden md:table-cell">Deportes</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default ListTable;
