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

// @Stores
import { useAuthStore } from "@/stores/auth.store";

const SidebarViewModel = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const [mobileWidth, setMobileWidth] = useState<boolean>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const logOutUser = useAuthStore(state => state.logOutUser)
    const router = useRouter();

    const onlyWidth = useWindowWidth();    

    useEffect(() => {
        setMobileWidth(onlyWidth < 768);
    }, [onlyWidth]);

    function toggleSidebar() {
        setIsCollapsed(!isCollapsed);
    }

    const handleSignOut = async () => {
        setIsDisabled(true);
        setIsLoading(true);
        Cookies.remove("login-user-cookie");
        Cookies.remove("initial-social-cookie");
        Cookies.remove("social-account-cookie");
        await logout();
        logOutUser();
        router.push(APPYENDA.LOGIN);
        router.refresh();
        localStorage.removeItem("cookieFallback");
    };

    return {
        handleSignOut,
        isCollapsed,
        isDisabled,
        isLoading,
        mobileWidth,
        onlyWidth,
        setIsCollapsed,
        toggleSidebar,
    };
};

export default SidebarViewModel;
