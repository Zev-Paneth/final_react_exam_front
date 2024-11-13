import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {IUser} from '../../../../../backend/src/interfaces/interfaces'

interface UserState extends IUser {
    token: string | null;
    error: string | null;
}

const initialState: UserState = {
    username: null,
    password: null,
    organization: null,
    token: localStorage.getItem('token') || null,
    error: null,
};

const API_URL = import.meta.env.VITE_API_URL;


export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (userData: { username:string; password: string; organization: string }) => {

        const response = await axios.post(`${API_URL}/users/register`, userData);
        localStorage.setItem('token', response.data.AccessToken);
        return response.data;

    }
);


export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (credentials: { username: string; password: string }) => {
        const response = await axios.post(`${API_URL}/users/login`, credentials);
        localStorage.setItem('token', response.data.AccessToken);
        return response.data;
    }
);

export const fetchCurrentUser = createAsyncThunk(
    'user/fetchCurrentUser',
    async (_, {getState}) => {
        const state = getState() as { user: UserState };
        const response = await axios.get(`${API_URL}/users/current`, {
            headers: {
                Authorization: `Bearer ${state.user.token}`,
            },
        });
        return response.data;
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout(state) {
            state.id = null;
            state.name = null;
            state.email = null;
            state.age = null;
            state.token = null;
            localStorage.removeItem('token');
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.token = action.payload.AccessToken;
                state.error = 'not error';
            })
            .addCase(registerUser.rejected, (state) => {
                state.status = 'failed';
                state.error = "Can't register user";
            })
            .addCase(loginUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.token = action.payload.AccessToken;
                state.error = 'not error';
            })
            .addCase(loginUser.rejected, (state) => {
                state.status = 'failed';
                state.error = "Can't login User";
            })
            .addCase(fetchCurrentUser.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.username = action.payload.username;
                state.organization = action.payload.organization;
            })
            .addCase(fetchCurrentUser.rejected, (state) => {
                state.status = 'failed';
                state.error = "Can't fetch data";
                state.token = null;
                localStorage.removeItem('token');
            });
    },
});

export const {logout} = userSlice.actions;
export default userSlice.reducer;
