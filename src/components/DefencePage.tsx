import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/store";
import { IResource, IUser } from "../../../backend/src/interfaces/interfaces";
import { logout } from "../store/features/user/userSlice";
import { useUserSelector } from "../utils/handleAuth";

const DefencePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user:IUser = useSelector((state: RootState) => state.user);
    const { username, orgName, organization } = useUserSelector(user);
    const orgResources: IResource[] = organization.resources;

    const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
        try {
            await dispatch(logout());
            navigate("/login");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

    return (
        <div className="defence-page">
            <header className="defence-header">
                <h1>Organization: {orgName}</h1>
                <h2>Your Username: {username}</h2>
            </header>

            <main className="defence-main">
                <section className="available-ammo">
                    <h3>Available Ammo</h3>
                    {orgResources?.length > 0 ? (
                        <ul className="resources-list">
                            {orgResources.map((resource) => (
                                <li
                                    key={resource.name}
                                    className="resource-item"
                                >
                                    {resource.name} × {resource.amount}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No resources available</p>
                    )}
                </section>

                <button
                    className="logout-button"
                    onClick={handleLogout}
                    aria-label="Log out"
                >
                    <span className="glyphicon glyphicon-log-out"></span> Log out
                </button>
                <LaunchedRockets />
            </main>
        </div>
    );
};

export default DefencePage;