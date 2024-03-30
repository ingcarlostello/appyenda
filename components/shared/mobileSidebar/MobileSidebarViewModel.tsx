"use client";

import { useEffect, useState } from "react";

// @Nextjs
import { useRouter } from "next/navigation";

// @react-hook windows size
import { useWindowWidth } from "@react-hook/window-size";

// @Js-cookie
import Cookies from "js-cookie";

// @Lib
import { logout } from "@/lib/appwrite/api";

// @Constants
import { APPYENDA } from "@/constants/pages";

const MobileSidebarViewModel = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const [mobileWidth, setMobileWidth] = useState<boolean>();
    const router = useRouter();

    const onlyWidth = useWindowWidth();

    useEffect(() => {
        setMobileWidth(onlyWidth < 768);
    }, [onlyWidth]);

    function toggleSidebar() {
        setIsCollapsed(!isCollapsed);
    }

    const handleSignOut = async () => {
        Cookies.remove("login-user-cookie");
        Cookies.remove("initial-social-cookie");
        Cookies.remove("social-account-cookie");
        await logout();
        router.push(APPYENDA.LOGIN);
        router.refresh();
    };

    return {
        handleSignOut,
        isCollapsed,
        mobileWidth,
        onlyWidth,
        setIsCollapsed,
        toggleSidebar,
    };
};

export default MobileSidebarViewModel;