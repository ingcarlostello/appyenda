// @Components
import { MetricCard } from "@/components/shared/MetricCard";

// @Lucide react icons
import { CalendarCheck, CircleDollarSign, Users } from "lucide-react";

const Dashboard = () => {
    return (
        <div className="pl-10 w-full">
            <p className="text-2xl font-semibold mb-10">Dasboard</p>

            <div className="grid grid-cols-4 gap-4 w-full pr-8">
                <div>
                    <MetricCard 
                        icon={<CircleDollarSign size={35} />}
                        iconColor="bg-green-400"
                        title="Total Ventas"
                        value="$45,700"
                    />
                </div>

                <div>
                    <MetricCard
                        icon={<CalendarCheck size={35} />}
                        iconColor="bg-blue-400"
                        title="Reservas"
                        value="87"

                    />
                </div>
                <div>
                    <MetricCard
                        icon={<Users size={35} />}
                        iconColor="bg-orange-400"
                        title="Clientes"
                        value="250"
                    />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
