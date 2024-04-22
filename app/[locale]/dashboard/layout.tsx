"use client";

// @Components
import LanguageSelector from "@/components/shared/LanguageSelector";
import { MobileSidebar } from "@/components/shared/mobileSidebar/MobileSidebar";
import Sidebar from "@/components/sidebar-nav/Sidebar";
import { ModeToggle } from "@/components/theme-toggle";

type DashboardLayoutProps = { children: React.ReactNode };

const Layout = ({ children }: DashboardLayoutProps) => {
	return (
		<div className="h-screen ">
			<div className="flex justify-between place-items-end sm:justify-end">
				<div className="md:hidden pl-4 pt-4">
					<MobileSidebar />
				</div>
				<div className="flex justify-end  gap-2 pr-4 pt-2">
					<div>
						<ModeToggle />
					</div>
					<LanguageSelector />
				</div>
			</div>
			<div className=" flex">
				<div className="  w-2/12 border-r h-screen sm:relative sm:-top-11  max-[767px]:hidden md:block md:w-1/4 lg:w-1/6">
					<Sidebar />
				</div>
				<div className="w-full pl-8">{children}</div>
			</div>
		</div>
	);
};

export default Layout;
