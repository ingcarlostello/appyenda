import { account } from "@/lib/appwrite/config";

export async function GET() {

    const res = await account.getSession("current")

    const data = await res

    console.log('data --->', data);
    
}