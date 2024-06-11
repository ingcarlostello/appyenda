// @Zustand
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

// @Interfaces
import { IService } from "@/interfaces/IServices";

interface IServicesState {
    services: IService[];
    addService: (service: IService) => void;
    loadServices: (services: IService[]) => Promise<void>;
}

const servicesStoreAPI: StateCreator<IServicesState,[["zustand/devtools", never]]> = (set, get) => ({
    services: [],

    addService: (service: IService) => {
        const newService = service;
        set(state => ({
            services: [
                ...state.services,
                newService
            ]
        }), false, "newService")
    },



    loadServices: async (services) => {
        console.log('services ++++++>', services);        
        set({ services }, false, "loadServices");
    }
});

export const useServicesStore = create<IServicesState>()(
    devtools(servicesStoreAPI)
);
