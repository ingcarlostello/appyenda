"use client";

// @Lucide-react
import {
	Briefcase,
	CalendarDays,
	LayoutDashboard,
	Loader2,
	User,
} from "lucide-react";

// @UI components
import { Button } from "../ui/button";
import { Nav } from "../ui/nav";

// @View Models
import SidebarViewModel from "./SidebarViewModel";

// @Constants
import { APPYENDA } from "@/constants/pages";

// @Next-intl
import { useTranslations } from "next-intl";

export default function SideNavbar() {
	const { handleSignOut, isDisabled, isLoading } = SidebarViewModel();

	const t = useTranslations("Sidebar");

	return (
		<div>
			<Nav
				isCollapsed={false}
				links={[
					{
						title: `${t("DASHBOARD")}`,
						href: "/dashboard",
						icon: LayoutDashboard,
						variant: "default",
					},
					{
						title: `${t("CALENDAR")}`,
						href: APPYENDA.CALENDAR,
						icon: CalendarDays,
						variant: "ghost",
					},
					{
						title: `${t("SERVICES")}`,
						href: APPYENDA.SERVICES,
						icon: Briefcase,
						variant: "ghost",
					},
					{
						title: `${t("PROFILE")}`,
						href: APPYENDA.PROFILE,
						icon: User,
						variant: "ghost",
					},
				]}
			/>

			<div>
				<div className="flex justify-center mt-12">
					<Button disabled={isDisabled} onClick={handleSignOut}>
						{isLoading ? (
							<>
								<Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
								{t("LOGGING_OUT")}{" "}
							</>
						) : (
							t("LOGOUT")
						)}
					</Button>
				</div>
			</div>
		</div>
	);
}
