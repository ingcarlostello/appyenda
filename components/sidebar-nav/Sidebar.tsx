"use client";

// @Lucide-react
import {
  Briefcase,
  CalendarDays,
  ChevronRight,
  LayoutDashboard,
  User
} from "lucide-react";

// @UI components
import { Button } from "../ui/button";
import { Nav } from "../ui/nav";

// @View Models
import SidebarViewModel from "./SidebarViewModel";
import { APPYENDA } from "@/constants/pages";

export default function SideNavbar() {

  const {isCollapsed, mobileWidth, toggleSidebar} = SidebarViewModel()

  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
    
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}

      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/dashboard",
            icon: LayoutDashboard,
            variant: "default"
          },
          {
            title: "Calendar",
            href: APPYENDA.CALENDAR,
            icon: CalendarDays,
            variant: "ghost"
          },
          {
            title: "Services",
            href: APPYENDA.SERVICES,
            icon: Briefcase,
            variant: "ghost"
          },
          {
            title: "Profile",
            href: APPYENDA.PROFILE,
            icon: User,
            variant: "ghost"
          }
        ]}
      />


    </div>
  );
}