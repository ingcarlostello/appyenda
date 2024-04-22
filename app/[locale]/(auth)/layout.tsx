// @Components
import LanguageSelector from "@/components/shared/LanguageSelector";
import { ModeToggle } from "@/components/theme-toggle";

type AuthLayoutProps = { children: React.ReactNode };

export default function AuthLayout({ children }: AuthLayoutProps) {
	return (
		<main>
			<>
				<div className="pt-4 mr-6 flex justify-end gap-2">
					<div>
						<ModeToggle />
					</div>
					<LanguageSelector />
				</div>
				{children}
			</>
		</main>
	);
}
