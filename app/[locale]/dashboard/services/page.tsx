// @Components
import { ServicesModal } from "@/components/ServicesForm/modal/Modal";
import ListTable from "@/components/shared/listTable/ListTable";

const Services = () => {

    return (
        <div>
            <p className="xs:text-2xl xs:font-bold md:text-4xl md:font-bold lg:text-4xl lg:font-bold">
                Services
            </p>
            <div className="flex justify-end pr-4">
                <ServicesModal />
            </div>
            <div className="mt-8">
                <ListTable />
            </div>
        </div>
    );
};

export default Services;
