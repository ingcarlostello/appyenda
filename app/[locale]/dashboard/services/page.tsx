// @Components
import ListTable from "@/components/shared/listTable/ListTable";

// @Shadcn
import { Button } from "@/components/ui/button";

// @Icons
import { PlusCircleIcon } from "lucide-react";

const Services = () => {

    return (
        <div>
            <p className="xs:text-2xl xs:font-bold md:text-4xl md:font-bold lg:text-4xl lg:font-bold">
                Services
            </p>
            <div className="flex justify-end pr-4">
                <Button className="h-8 gap-1" size="sm">
                    <PlusCircleIcon className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Add Service
                    </span>
                </Button>
            </div>
            <div className="mt-8">
                <ListTable />
            </div>
        </div>
    );
};

export default Services;
