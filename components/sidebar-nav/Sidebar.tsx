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

// @Constants
import { APPYENDA } from "@/constants/pages";

// @Next-intl
import { useTranslations } from "next-intl";

export default function SideNavbar() {

  const {isCollapsed, mobileWidth, toggleSidebar} = SidebarViewModel()

  const t = useTranslations("Sidebar");

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
            title: `${t("DASHBOARD")}`,
            href: "/dashboard",
            icon: LayoutDashboard,
            variant: "default"
          },
          {
            title: `${t("CALENDAR")}`,
            href: APPYENDA.CALENDAR,
            icon: CalendarDays,
            variant: "ghost"
          },
          {
            title: `${t("SERVICES")}`,
            href: APPYENDA.SERVICES,
            icon: Briefcase,
            variant: "ghost"
          },
          {
            title: `${t("PROFILE")}`,
            href: APPYENDA.PROFILE,
            icon: User,
            variant: "ghost"
          }
        ]}
      />


    </div>
  );
}