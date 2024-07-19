"use client";

// @reactjs
import { useEffect } from "react";

// @next js
import { useRouter } from "next/navigation";

const Redirect = () => {
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {            
            try {
                const res = await fetch("/api/auth/loginWithGoogle", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userType: 'client' }),
                });

                if (!res.ok) {
                    throw new Error(
                        'error en logueo de google'
                    );
                }
                const data = await res.json();             
                router.push("/user/client");
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