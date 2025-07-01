import { NavLink, Outlet } from "react-router";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const RootLayout = () => {



    return (
        <div className="bg-gray-50 relative">
            <div className="mx-0 md:mx-5 lg:mx-10 xl:mx-14 2xl:mx-20 ">
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default RootLayout;