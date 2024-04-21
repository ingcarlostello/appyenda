"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// @next-intl
import { useTranslations } from "next-intl";

export function ModeToggle() {
	const { setTheme, themes } = useTheme();
	const t = useTranslations("ColorSelector");

	const colorTranslations: { [key: string]: string } = {
		orange: "ORANGE",
		darkorange: "DARKORANGE",
		blue: "BLUE",
		darkblue: "DARKBLUE",
		green: "GREEN",
		darkgreen: "DARKGREEN",
		light: "LIGHT",
		dark: "DARK",
		system: "SYSTEM",
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{themes.map((theme) => (
					<DropdownMenuItem key={theme} onClick={() => setTheme(theme)}>
						{t(colorTranslations[theme])}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
