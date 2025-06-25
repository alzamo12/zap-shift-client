import React from 'react';

const NavbarCenter = ({navItems}) => {
    return (
           <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
    );
};

export default NavbarCenter;