import { Outlet } from 'react-router';
import authImg from "../assets/authImage.png"
const AuthLayout = () => {
    return (
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
    );
};

export default AuthLayout;