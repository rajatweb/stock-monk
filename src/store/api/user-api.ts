import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getHash } from "@/lib/utils";
import { ILoginWithOTPRequest, ILoginWithOTPResponse } from "@/types/api/login";

const baseUrl = `${process.env.NEXT_PUBLIC_APP_API_URL}/NorenWClientTP/`;

const config = (opt: string) => ({
    apkversion: 'js:1.0.0',
    uid: process.env.NEXT_PUBLIC_APP_USER_ID,
    pwd: process.env.NEXT_PUBLIC_APP_PASSWORD ? getHash(process.env.NEXT_PUBLIC_APP_PASSWORD) : '',
    factor2: opt,
    vc: process.env.NEXT_PUBLIC_APP_VENDOR_CODE,
    appkey: getHash(`${process.env.NEXT_PUBLIC_APP_USER_ID}|${process.env.NEXT_PUBLIC_APP_API_KEY}`),
    imei: process.env.NEXT_PUBLIC_APP_IMEI,
    source: 'API',
})

export const userApi = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ["users"],
    endpoints: (builder) => ({
        loginWithOTP: builder.mutation<ILoginWithOTPResponse, ILoginWithOTPRequest>({
            query: (data) => {
                const sendData = config(data.pin)
                return {
                    url: "/QuickAuth",
                    method: "POST",
                    body: `jData=${JSON.stringify(sendData)}`
                }
            }
        })
    }),
});

export const { useLoginWithOTPMutation } = userApi;
