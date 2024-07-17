"use client";

import { useCallback, useEffect, useState } from "react";

// @Nextjs
import { useRouter } from "next/navigation";

// @react-hook windows size
import { useWindowWidth } from "@react-hook/window-size";

// @Lib
import { logout } from "@/lib/appwrite/api";

// @Constants
import { APPYENDA } from "@/constants/pages";

// @Stores
import { useAuthStore } from "@/stores/auth.store";

// @Actions
import { deleteCookie } from "@/lib/actions/deleteCookie.action";

const SidebarViewModel = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [mobileWidth, setMobileWidth] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const logOutUser = useAuthStore((state) => state.logOutUser);
    const router = useRouter();
    const onlyWidth = useWindowWidth();

    useEffect(() => {
        setMobileWidth(onlyWidth < 768);
    }, [onlyWidth]);

    const toggleSidebar = useCallback(() => {
        setIsCollapsed((prev) => !prev);
    }, []);

    const handleSignOut = useCallback(async () => {
        setIsLoading(true);
        setIsDisabled(true);
        try {
            await deleteCookie("userToken");
            await logout();
            logOutUser();
            router.push(APPYENDA.LOGIN);
            router.refresh();
            localStorage.removeItem("cookieFallback");
        } catch (error) {
            console.error("Error during sign out:", error);
        } finally {
            setIsLoading(false);
            setIsDisabled(false);
        }
    }, [logOutUser, router]);

    return {
        handleSignOut,
        isCollapsed,
        isLoading,
        mobileWidth,
        onlyWidth,
        setIsCollapsed,
        toggleSidebar,
        isDisabled
    };
};

export default SidebarViewModel;