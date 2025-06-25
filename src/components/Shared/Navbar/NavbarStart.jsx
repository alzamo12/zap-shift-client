import React from 'react';
import { Link } from 'react-router';

const NavbarStart = ({navItems, logo}) => {
    return (
         <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <Link to="/" className='relative'>
                    <img className='w-6' src={logo} alt="" />
                    <p className='absolute w-32 top-2 left-5 font-bold text-xl'>Zap Shift</p>
                </Link>
            </div>
    );
};

export default NavbarStart;