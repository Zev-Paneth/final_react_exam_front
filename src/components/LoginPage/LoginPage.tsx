import React, {useState} from "react";
import {useSelector} from "react-redux";
import {loginUser} from "../../store/features/user/userSlice";
import {RootState} from "../../store";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../hooks/useDispatchType";
import "./LoginPage.css";
import {Link} from "react-router-dom";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {status, error} = useSelector((state: RootState) => state.user);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(loginUser({username, password})).then((action) => {
            if (loginUser.fulfilled.match(action)) {
                navigate("/playField/:index");
            }
        });
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {status === "loading" && <p className="loading-message">Loading...</p>}
            {status === "failed" && error && <p className="error-message">{error}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="username"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                />
                <button type="submit">Login</button>
            </form>
            <p className="switch-auth">
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </div>
    );
};

export default LoginPage;
