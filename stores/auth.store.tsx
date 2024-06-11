// @Zustand
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

// @Interfaces
import { IUser } from "@/interfaces/IAuth";

interface IAuthState {
    userProviderDocumentId?: string;
    email: string;
    name: string;
    userId: string;
    username: string;
    usertype: string;
    loginUserWithEmail: (userData: IUser) => Promise<void>;
    logOutUser: () => void;
}

const authStoreAPI: StateCreator<IAuthState, [["zustand/devtools", never]]> = (set, get) => ({
    userProviderDocumentId: "",
    email: "",
    name: "",
    userId: "",
    username: "",
    usertype: "",

    loginUserWithEmail: async (userData) => {
        try {
            set(
                {
                    userProviderDocumentId: userData.id,
                    email: userData.email,
                    name: userData.name,
                    userId: userData.userId,
                    username: userData.username,
                    usertype: userData.usertype,
                },
                false,
                "loginUserWithEmail"
            );

            return;
        } catch (error) {
            console.log("error >>>>>>>", error);
            set({
                userProviderDocumentId: "",
                email: "",
                name: "",
                userId: "",
                username: "",
                usertype: "",
            });
        }
    },

    logOutUser: () => {
        set({
            userProviderDocumentId: "",
            email: "",
            name: "",
            userId: "",
            username: "",
            usertype: "",
        })
    }
});

export const useAuthStore = create<IAuthState>()(devtools(authStoreAPI));
