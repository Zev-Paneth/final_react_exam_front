import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import {useNavigate} from "react-router-dom";
import "./RegisterPage.css";
import {Link} from "react-router-dom";
import {OrganizationEnum} from "../../../../backend/src/interfaces/interfaces.ts"
import {AppDispatch} from "../../store/store.ts";
import {handleRegistration} from "../../utils/handleRegistration.ts";

const organizationArr = Object.values(OrganizationEnum) as string[];


const RegisterPage: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [organization, setOrganization] = useState(organizationArr[0]);

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const {status, error} = useSelector((state: RootState) => state.user);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await handleRegistration({ username, password, organization }, dispatch, navigate);
        } catch (error) {
            console.error(error);
            alert(`Failed to register user: ${error}`);
        }
    };


    return (
        <div className="register-container">
            <h2>Register</h2>
            {status === "loading" && <p className="loading-message">Loading...</p>}
            {status === "failed" && error && <p className="error-message">{error}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="new-password"
                />
                <select onChange={(e) => setOrganization(e.target.value)} value={organization}>
                    {organizationArr.map((organization) => (
                        <option key={organization} value={organization}>
                            {organization}
                        </option>
                    ))}
                </select>
                <button type="submit">Register</button>
            </form>
            <p className="switch-auth">
                Have an account already? <Link to="/login">sign in here</Link>
            </p>
        </div>
    );
};

export default RegisterPage;
