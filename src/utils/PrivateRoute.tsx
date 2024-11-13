import { ReactNode, useEffect} from "react";
import {useSelector} from "react-redux";
import { useNavigate, useParams } from "react-router";

interface IPrivateRoute{
    component: ReactNode,
}

const PrivateRoute = ({ component }: IPrivateRoute) => {
    const params = useParams<{ index: string }>();
    const indexValue = params.index ? parseInt(params.index) : 0;

    const accessList = useSelector((state: { floorAccess: { floorAccess: [boolean, boolean, boolean, boolean, boolean] } }) => state.floorAccess.floorAccess);

    const hasPermission = accessList[indexValue];

    const navigate = useNavigate();

    useEffect(() => {
        if (!hasPermission) {
            navigate('/forbidden');
        }
    }, [hasPermission, navigate]);

    return (
        <>
            {hasPermission ? component : null}
        </>
    );
};


export default PrivateRoute