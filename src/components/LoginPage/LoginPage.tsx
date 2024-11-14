import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store/store.ts";
import {useNavigate} from "react-router-dom";
import "./LoginPage.css";
import {Link} from "react-router-dom";
import {handleLogin} from "../../utils/handleAuth.ts";

const Login: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const {status, error} = useSelector((state: RootState) => state.user);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await handleLogin({ username, password }, dispatch, navigate);
        } catch (error) {
            console.error(error);
            alert(`Failed to login user: ${JSON.stringify(error)}`);
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            {status === "loading" && <p className="loading-message">Loading...</p>}
            {status === "failed" && error && <p className="error-message">{error}</p>}

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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

export default Login;
