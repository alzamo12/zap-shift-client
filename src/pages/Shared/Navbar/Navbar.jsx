import { Link, NavLink } from 'react-router';
import logo from "../../../assets/logo.png"
import NavbarStart from '../../../components/Shared/Navbar/NavbarStart';
import NavbarCenter from '../../../components/Shared/Navbar/NavbarCenter';
import NavbarEnd from '../../../components/Shared/Navbar/NavbarEnd';
import useAuth from '../../../hooks/useAuth';

const Navbar = () => {
    const { user, logout } = useAuth();

    const handleLogout = () => {
        return logout()
    }

    const navItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/coverage">Coverage</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/pricing">Pricing</NavLink></li>
        <li><NavLink to="/be-a-rider">Be a Rider</NavLink></li>

        {
            user &&
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
        }

    </>;
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <NavbarStart navItems={navItems} logo={logo} />
            <NavbarCenter navItems={navItems} />
            <NavbarEnd user={user} handleLogout={handleLogout} />
        </div>
    );
};

export default Navbar;