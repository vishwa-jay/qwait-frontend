import { IProfile } from "./IProfile"

export interface IUser{
    id: number
    name: string
    email: string
    role: number
    level?: string
    profile: IProfile
    accessToken: string
    company_id: number
}

export interface IUserAccount extends Omit<IUser, "name" | "profile" | "accessToken">{
    firstname: string
    lastname: string
    password: string
    status: string
}