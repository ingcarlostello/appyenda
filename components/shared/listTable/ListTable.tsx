"use client";

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

// @View Model
import ListTableViewModel from "./ListTableViewModel";
import { LoadingSpinner } from "../LoadingSpinner";
import { useServicesStore } from "@/stores/services.store";
import { useState } from "react";

const ListTable = () => {
    const { isLoading } = ListTableViewModel();

    const services = useServicesStore((state) => state.services);

    const t = useTranslations("ServicesPage");

    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>{t("NAME")}</TableHead>
                        <TableHead className="hidden md:table-cell">
                            {t("DESCRIPTION")}
                        </TableHead>
                        <TableHead>{t("DURATION")}</TableHead>
                        <TableHead>{t("PRICE")}</TableHead>
                        <TableHead className="hidden md:table-cell">
                            {t("CATEGORY")}
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {isLoading ? (<div className="mt-4"><LoadingSpinner /></div>) : (
                        services?.map((service, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">{service.name}</TableCell>
                                <TableCell className="w-6/12 hidden md:table-cell">
                                    {service.description}
                                </TableCell>
                                <TableCell>{service.duration}</TableCell>
                                <TableCell>$ {service.price}</TableCell>
                                <TableCell className="hidden md:table-cell">
                                    {service.category}
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default ListTable;
