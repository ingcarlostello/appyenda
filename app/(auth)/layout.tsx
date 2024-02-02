"use client"

type AuthLayoutProps = {
    children: React.ReactNode,
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <>
            <main className="bg-white md:bg-slate-50">{children}</main>
        </>
    )
}