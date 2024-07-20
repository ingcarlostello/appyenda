"use client";

// @reactjs
import { useEffect } from "react";

// @next js
import { useRouter } from "next/navigation";

// @Constants
import { APPYENDA } from "@/constants/pages";
import { LOGIN_WITH_GOOGLE } from "@/constants/urls";
import { CLIENT } from "@/constants/global";

const Redirect = () => {
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {            
            try {
                const res = await fetch(LOGIN_WITH_GOOGLE, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userType: CLIENT }),
                });

                if (!res.ok) {
                    throw new Error(
                        'error en logueo de google'
                    );
                }
                const data = await res.json();             
                router.push(APPYENDA.CLIENT);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="min-h-screen grid content-center">
            <div className="hijos text-center border-1 border-gray-300 p-20">
                <div className="nietos">Registrando usuario con Google...</div>
                <div className="nietos">
                    <span className="loading loading-spinner text-primary loading-lg"></span>
                </div>
            </div>
        </div>
    );
};

export default Redirect;