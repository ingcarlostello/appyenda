// @Zustand
import { StateCreator, create } from "zustand";
import { devtools } from "zustand/middleware";

// @Interfaces
import { IUser } from "@/interfaces/IAuth";

interface IAuthState {
    email: string;
    name: string;
    userId: string;
    username: string;
    usertype: string;
    loginUserWithEmail: (userData: IUser) => Promise<void>;
}

const authStoreAPI: StateCreator<IAuthState, [["zustand/devtools", never]]> = (set, get) => ({
    email: "",
    name: "",
    userId: "",
    username: "",
    usertype: "",

    loginUserWithEmail: async (userData) => {
        try {
            set(
                {
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
                email: "",
                name: "",
                userId: "",
                username: "",
                usertype: "",
            });
        }
    },
});

export const useAuthStore = create<IAuthState>()(devtools(authStoreAPI));
