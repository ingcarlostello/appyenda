export interface IUser {
    name: string;
    username:string;
    email: string;
    usertype: string;
    password?:string;
    checkbox?:boolean | undefined;
    userId: string
}