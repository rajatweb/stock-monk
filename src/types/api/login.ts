import { IUser } from "../user"

export type ILoginWithOTPRequest = {
    pin: string
}

export type ILoginWithOTPResponse = IUser;
