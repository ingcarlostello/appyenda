"use client"

import React from 'react';

import { Button } from "@/components/ui/button";
import { logout } from '@/lib/appwrite/api';
import { useRouter } from 'next/navigation';
import { APPYENDA } from '@/constants/pages';

const Dashboard = () => {

    const router = useRouter()

    const cerrarSesion = async () =>{
        await logout()
        router.push(APPYENDA.LOGIN);
        router.refresh()
    }

    return (
        <div>
            Dashboard page
            <Button type="submit" className="shad-button_primary" onClick={cerrarSesion}>
                Salir
            </Button>
        </div>
    );
};

export default Dashboard;