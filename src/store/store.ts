export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        // todos: todosReducer,
        // defence: DefenceReducer,
        // attack: AttackReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

