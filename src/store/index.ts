import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import todosReducer from './features/todos/todosSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
