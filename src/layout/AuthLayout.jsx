import { Link, Outlet } from 'react-router';
import authImg from "../assets/authImage.png"
import Navbar from '../pages/Shared/Navbar/Navbar';
import NavbarStart from '../components/Shared/Navbar/NavbarStart';
import Logo from '../components/Shared/Logo/Logo';
const AuthLayout = () => {
    return (
        <div className='relative'>
            <div className='md:mx-10 z-10 lg:mx-20 absolute top-6 left-5 lg:mt-4 xl:mt-20 shadow lg:shadow-none py-2 px-2 w-2/3'>
                <Logo />
            </div>
            <div className="hero w-screen min-h-screen">
                <div className="hero-content p-0 max-w-screen w-screen h-screen flex-col lg:flex-row-reverse">
                    {/* right side screen */}
                    <div className="hidden lg:grid items-center justify-center bg-amber-50 h-full w-1/2">
                        <img src={authImg} className='w-full' alt="" />
                    </div>
                    {/* left side screen */}
                    <div className='w-full lg:w-1/2'><Outlet /></div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;