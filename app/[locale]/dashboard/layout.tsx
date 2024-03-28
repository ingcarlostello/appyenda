// @Components
import Sidebar from "@/components/sidebar-nav/Sidebar";

// @Libs
import { cn } from "@/lib/utils";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

type DashboardLayoutProps = { children: React.ReactNode };

const Layout = ({ children }: DashboardLayoutProps) => {
  return (
    <div  className={cn(
      "min-h-screen w-full bg-white text-black flex ",
      inter.className,
      {
        "debug-screens": process.env.NODE_ENV === "development"
      }
    )}>
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
