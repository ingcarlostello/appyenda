"use client";

import { useEffect, useState } from "react";

// @react-hook windows size
import { useWindowWidth } from "@react-hook/window-size";

const SidebarViewModel = () => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
    const [mobileWidth, setMobileWidth] = useState<boolean>();

    const onlyWidth = useWindowWidth();

    useEffect(() => {
        setMobileWidth(onlyWidth < 768);
    }, [onlyWidth]);

    function toggleSidebar() {
        setIsCollapsed(!isCollapsed);
    }

    return {
        isCollapsed,
        mobileWidth,
        onlyWidth,
        setIsCollapsed,
        toggleSidebar,
    };
};

export default SidebarViewModel;
