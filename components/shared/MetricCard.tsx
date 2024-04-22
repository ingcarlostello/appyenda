import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MetricCardProps {
	icon: any;
	iconColor: string;
	title: string;
	value: string | number;
}

export function MetricCard({ icon, title, value, iconColor }: MetricCardProps) {
	return (
		<Card className="shadow-2xl ">
			<div className="p-4 flex">
				<div
					className={`flex items-center self-center p-4 rounded-full border ${iconColor}`}
				>
					{icon}
				</div>
				<div>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium mb-3">{title}</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="text-4xl font-bold">{value}</div>
					</CardContent>
				</div>
			</div>
		</Card>
	);
}
