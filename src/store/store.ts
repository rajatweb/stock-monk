import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./api/user-api";

export const store = () =>
    configureStore({
        reducer: {
            [userApi.reducerPath]: userApi.reducer 
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat([
                userApi.middleware
            ])
    });

export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
