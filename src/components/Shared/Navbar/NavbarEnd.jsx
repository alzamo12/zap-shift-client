import { Link } from "react-router";

const NavbarEnd = () => {
    return (
        <div className="navbar-end gap-4">
            <Link to="/login" className="btn btn-outline rounded-lg font-bold">Sign In</Link>
            <button className="btn btn-primary text-secondary  font-bold rounded-lg">Sign Up</button>
        </div>
    );
};

export default NavbarEnd;