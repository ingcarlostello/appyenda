// @Shadcn
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/ui/nav";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetTrigger,
} from "@/components/ui/sheet";
import MobileSidebarViewModel from "./MobileSidebarViewModel";
import { Switch } from "@/components/ui/switch";

// @Lucide-react
import {
	Briefcase,
	CalendarDays,
	LayoutDashboard,
	Menu,
	User,
	Sun,
	Moon,
} from "lucide-react";
import { APPYENDA } from "@/constants/pages";

// @Next-intl
import { useTranslations } from "next-intl";

export function MobileSidebar() {
	const { handleSignOut } = MobileSidebarViewModel();

	const t = useTranslations("Sidebar");

	return (
		<div>
			<Sheet>
				<SheetTrigger asChild>
					<Menu size={38} />
				</SheetTrigger>
				<SheetContent side="left">
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
					<SheetFooter className="flex flex-col justify-between">
						<SheetClose asChild>
							<Button onClick={handleSignOut} type="submit">
								{t("LOGOUT")}
							</Button>
						</SheetClose>
						<div className="flex">
							<Moon className=" w-4" />
							<Switch className="relative" />
							<Sun className=" w-4" />
						</div>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</div>
	);
}
