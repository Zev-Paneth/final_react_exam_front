import {ReactNode, useEffect} from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {RootState} from "../store/store";
import {useUserSelector} from "./handleAuth";
import {IUser} from "../../../backend/src/interfaces/interfaces.ts";

interface IPrivateRoute {
    component: ReactNode;
}

const AttackPrivateRoute = ({component}: IPrivateRoute) => {
    const user: IUser = useSelector((state: RootState) => state.user);

    const {orgName} = useUserSelector(user);
    const hasPermissionAttack = !orgName.startsWith("IDF");
    const navigate = useNavigate();

    useEffect(() => {
        if (!hasPermissionAttack) {
            navigate("/forbidden");
        }
    }, [hasPermissionAttack, navigate]);

    return user && hasPermissionAttack ? <>{component}</> : null;
};

export default AttackPrivateRoute;