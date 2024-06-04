import { useEffect, useState } from "react";

// @Stores
import { useAuthStore } from "@/stores/auth.store";
import { useServicesStore } from "@/stores/services.store";

// @Actions
import { getServices } from "@/lib/actions/services.actions";

const ListTableViewModel = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const userProviderDocumentId = useAuthStore((state) => state.userProviderDocumentId);
    const services = useServicesStore((state) => state.loadServices);

    useEffect(() => {
        const fetchServices = async () => {
            setIsLoading(true);
            try {
                const listOfServices = await getServices(userProviderDocumentId as string);
                services(listOfServices as []);
            } catch (error) {
                console.error("Error fetching services:", error);
            } finally {
                setIsLoading(false);
            }
        };
        if (userProviderDocumentId) {
            fetchServices();
        }
    }, [userProviderDocumentId, services]);

    return { isLoading };
};

export default ListTableViewModel;
