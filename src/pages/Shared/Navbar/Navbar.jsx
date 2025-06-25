import { Link, NavLink } from 'react-router';
import logo from "../../../assets/logo.png"
import NavbarStart from '../../../components/Shared/Navbar/NavbarStart';
import NavbarCenter from '../../../components/Shared/Navbar/NavbarCenter';
import NavbarEnd from '../../../components/Shared/Navbar/NavbarEnd';

const Navbar = () => {
    const navItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/coverage">Coverage</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/pricing">Pricing</NavLink></li>
        <li><NavLink to="/be-a-rider">Be a Rider</NavLink></li>
    </>;
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <NavbarStart navItems={navItems} logo={logo} />
            <NavbarCenter navItems={navItems} />
            <NavbarEnd />
        </div>
    );
};

export default Navbar;