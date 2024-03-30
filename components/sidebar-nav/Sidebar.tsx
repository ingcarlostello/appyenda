"use client";

// @Lucide-react
import { Briefcase, CalendarDays, LayoutDashboard, User } from "lucide-react";

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
  const { handleSignOut } = SidebarViewModel();

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
          <Button onClick={handleSignOut}>
            <div className="ml-2">{t("LOGOUT")}</div>
          </Button>
        </div>
      </div>
    </div>
  );
}
