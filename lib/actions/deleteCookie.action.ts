"use server"

import { cookies } from "next/headers";

export const deleteCookie = (cookieName: string) => {
    const cookieStore = cookies();
    cookieStore.delete(cookieName);
}