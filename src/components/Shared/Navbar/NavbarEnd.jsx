import { Link } from "react-router";

const NavbarEnd = ({ user, handleLogout }) => {

    return (
        <div className="navbar-end">
            {!user ?
                <div  className="flex gap-4">
                    <Link to="/login" className="btn btn-outline rounded-lg font-bold">Sign In</Link>
                    <Link to="/register" className="btn btn-primary text-secondary  font-bold rounded-lg">Sign Up</Link>
                </div> 
                :
                <button onClick={handleLogout}>LogOut</button>   
        }

        </div>
    );
};

export default NavbarEnd;