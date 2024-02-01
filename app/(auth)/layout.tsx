"use client"

type AuthLayoutProps = {
    children: React.ReactNode,
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <>
            <main className="bg-slate-50">{children}</main>
        </>
    )
}