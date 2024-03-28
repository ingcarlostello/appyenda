// @Components
import LanguageSelector from "@/components/shared/LanguageSelector";
import Sidebar from "@/components/sidebar-nav/Sidebar";

// @Libs
import { cn } from "@/lib/utils";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type DashboardLayoutProps = { children: React.ReactNode };

const Layout = ({ children }: DashboardLayoutProps) => {
  return (
    <div>
      <div className="flex justify-end pt-4 mr-6">
        <LanguageSelector />
      </div>
      <div className={cn("min-h-screen w-full text-black flex")}>
        <div>
          <Sidebar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
