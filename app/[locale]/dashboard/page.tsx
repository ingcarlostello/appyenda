"use client";

// @Shad-cn
import { Button } from "@/components/ui/button";

// @ViewModel
import DashboardViewModel from "./DashboardViewModel";

const Dashboard = () => {

    const { handleSignOut } = DashboardViewModel()

    return (
        <div>
            Dashboard page
            <Button
                type="submit"
                className="shad-button_primary"
                onClick={handleSignOut}
            >
                Salir
            </Button>
        </div>
    );
};

export default Dashboard;
