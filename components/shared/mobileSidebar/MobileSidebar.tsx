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
import { ModeToggle } from "@/components/theme-toggle";

export function MobileSidebar() {
	const { handleSignOut } = MobileSidebarViewModel();

	const t = useTranslations("Sidebar");

	return (
		<div className="relative">
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
					<SheetFooter>
						<SheetClose asChild>
							<Button onClick={handleSignOut} type="submit">
								{t("LOGOUT")}
							</Button>
						</SheetClose>
						<div className="absolute bottom-2 left-6">
							<ModeToggle />
						</div>
					</SheetFooter>
				</SheetContent>
			</Sheet>
		</div>
	);
}
