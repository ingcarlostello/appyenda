// @Components
import LanguageSelector from "@/components/shared/LanguageSelector";

type AuthLayoutProps = { children: React.ReactNode };

export default function AuthLayout({ children }: AuthLayoutProps) {
	return (
		<main className=" ">
			<>
				<div className="pt-4 mr-6 flex justify-end">
					<LanguageSelector />
				</div>
				{children}
			</>
		</main>
	);
}
