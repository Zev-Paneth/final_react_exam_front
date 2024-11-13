import { configureStore } from "@reduxjs/toolkit";
import FloorReducer from "./floorreducer.ts";
import RoleReducer from "./rolereducer.ts";

export const store = configureStore({
    reducer: {
        defence: DefenceReducer,
        attack: AttackReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
