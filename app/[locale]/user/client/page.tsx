"use client"

import { useAuthStore } from "@/stores/auth.store";

const Client = () => {
    const userName = useAuthStore(state => state.name)
    return (
            <div>
                Hola <p>{userName}</p>
                Client page
            </div>
    );
};

export default Client;