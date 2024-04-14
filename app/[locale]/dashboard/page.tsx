"use client";
// @Components
import { MetricCard } from "@/components/shared/MetricCard";

// @Lucide react icons
import { CalendarCheck, CircleDollarSign, Users } from "lucide-react";

// @View model
import DashboardViewModel from "./DashboardViewModel";

const Dashboard = () => {
	const { userName } = DashboardViewModel();

	return (
		<div>
			<p className="text-5xl font-bold mb-14  max-[767px]:text-3xl">
				Hola {userName}!
			</p>

			<div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-4 w-full pr-8">
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
