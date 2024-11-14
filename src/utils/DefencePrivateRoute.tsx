import { ReactNode, useEffect} from "react";
import {useSelector} from "react-redux";
import { useNavigate } from "react-router";
import {RootState} from "../store/store.ts";
import { IUser} from "../../../backend/src/interfaces/interfaces.ts";
import {useUserSelector} from "./handleAuth.ts";

interface IPrivateRoute{
    component: ReactNode,
}

const DefencePrivateRoute = ({ component }: IPrivateRoute) => {
    const user:IUser = useSelector((state: RootState) => state.user);
    const {orgName} = useUserSelector(user)

    const hasPermissionDefence = orgName.startsWith("IDF");

    const navigate = useNavigate();

    useEffect(() => {
        if (!hasPermissionDefence) {
            navigate("/forbidden");
        }
    }, [hasPermissionDefence, navigate]);

    return (
        <>
            {hasPermissionDefence ? component : null}
        </>
    );
};


export default DefencePrivateRoute