"use server"
import {ID} from 'appwrite'

import { account } from "../appwrite/config"

export async function registerUser(user) {
    console.log('user --->', user);
    

    try {

        const newAccount = await account.create(
            ID.unique(),
            user.email,
            user.password,
            user.name,
        )
        return newAccount
    } catch (error) {
        console.log(error);
        return error
    }
}