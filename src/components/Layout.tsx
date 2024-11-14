import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout: React.FC = () => {
    return (
        <div className="layout-page">
            <nav className="navbar">
                <h1>War Simulator</h1>
                <div className="nav-links">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="playField/defence">Defend Page</Link>
                    <Link to="playField/attack">Attack Page</Link>
                    <Link to="/shop">Weapon Shop</Link>
                </div>
            </nav>

            <Outlet />
        </div>
    );
};

export default Layout;
