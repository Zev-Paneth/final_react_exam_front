import { AppDispatch } from "../store/store";
import { NavigateFunction } from "react-router-dom";
import { fetchCurrentUser, loginUser, registerUser } from "../store/features/user/userSlice";
import { IUser } from "../../../backend/src/interfaces/interfaces";

const navigateToPlayField = (orgName: string, navigate: NavigateFunction) => {
    navigate(orgName.startsWith("IDF") ? "/playField/defence" : "/playField/attack");
};

export const handleRegister = async (
    credentials: IUser,
    dispatch: AppDispatch,
    navigate: NavigateFunction
) => {
    try {
        await dispatch(registerUser(credentials)).unwrap();
        const user = await dispatch(fetchCurrentUser()).unwrap();
        navigateToPlayField(user.organization.name, navigate);
    } catch (error: any) {
        // const errorTitle = error.title || 'Login failed!';
        const errorMessage = error.message || 'Login failed!';
        const errorStatus = error.status || 500;

        switch (errorStatus) {
            case 400:
                console.error('Bad request:', errorMessage);
                break;
            case 401:
                console.error('Unauthorized:', errorMessage);
                break;
            case 404:
                console.error('Not found:', errorMessage);
                break;
            default:
                console.error('Error:', errorMessage);
        }

        throw error;
    }
};

export const handleLogin = async (
    { username, password }: Pick<IUser, 'username' | 'password'>,
    dispatch: AppDispatch,
    navigate: NavigateFunction
) => {
    try {
        if (!username || !password) {
            throw new Error('Username and password are required');
        }

        await dispatch(loginUser({ username, password })).unwrap();
        const user = await dispatch(fetchCurrentUser()).unwrap();
        navigateToPlayField(user.organization.name, navigate);
    } catch (error: any) {
        // const errorTitle = error.title || 'Login failed!';
        const errorMessage = error.message || 'Login failed!';
        const errorStatus = error.status || 500;

        switch (errorStatus) {
            case 400:
                console.error('Bad request:', errorMessage);
                break;
            case 401:
                console.error('Unauthorized:', errorMessage);
                break;
            case 404:
                console.error('Not found:', errorMessage);
                break;
            default:
                console.error('Error:', errorMessage);
        }

        throw error;
    }
};