import {AppDispatch} from "../store/store.ts";
import {NavigateFunction} from "react-router-dom";
import {fetchCurrentUser, registerUser} from "../store/features/user/userSlice.ts";
import {IUser} from "../../../backend/src/interfaces/interfaces.ts";

export const handleRegistration = async (
    { username, password, organization }: IUser,
    dispatch: AppDispatch,
    navigate: NavigateFunction
) => {
    try {
        await dispatch(registerUser({ username, password, organization })).unwrap();
        const user = await dispatch(fetchCurrentUser()).unwrap();
        navigate(user.organization.name.startsWith("IDF") ? "/playField/defence" : "/playField/attack");
    } catch (error) {
        console.error('Registration failed:', error);
        throw error;
    }
};