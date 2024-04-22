import { useState } from "react";
import { useEffect } from "react";

// @next-themes
import { useTheme } from "next-themes";

// Checks if theme used is dark or not

export const isDarkTheme = (): boolean | null => {
	const { theme } = useTheme();
	const prefersDarkMode =
		typeof window !== "undefined"
			? window.matchMedia("(prefers-color-scheme: dark)").matches
			: false;

	const isDarkMode =
		theme === "dark" ||
		theme === "darkorange" ||
		theme === "darkblue" ||
		theme === "darkgreen" ||
		(theme === "system" && prefersDarkMode);

	// Prevent hydration warning
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return isDarkMode;
};
