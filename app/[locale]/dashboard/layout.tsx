"use client";

// @Components
import LanguageSelector from "@/components/shared/LanguageSelector";
import { MobileSidebar } from "@/components/shared/mobileSidebar/MobileSidebar";
import Sidebar from "@/components/sidebar-nav/Sidebar";
import { ModeToggle } from "@/components/theme-toggle";

type DashboardLayoutProps = { children: React.ReactNode };

const Layout = ({ children }: DashboardLayoutProps) => {
	return (
		<div className="h-screen">
			<div className="md:hidden pl-4 pt-4">
				<MobileSidebar />
			</div>
			<div className="flex justify-end  gap-2 pr-4 pt-2">
				<div className="hidden sm:block">
					<ModeToggle />
				</div>
				<LanguageSelector />
			</div>
			<div className="flex">
				<div className="  w-2/12 border-r h-screen max-[767px]:hidden md:block md:w-1/4 lg:w-1/6">
					<Sidebar />
				</div>
				<div className="w-full pl-8">{children}</div>
			</div>
		</div>
	);
};

export default Layout;
