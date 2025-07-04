import { NavLink, Outlet } from "react-router";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const RootLayout = () => {



    return (
        <div className=" relative">
            <div className="mx-0 md:mx-5 lg:mx-10 xl:mx-14 2xl:mx-20 ">
                <div className="min-h-screen relative h-screen flex flex-col">
                    {/* <div className="z-10 fixed max-w-screen-2xl w-full mx-auto grid justify-center top-0"> */}
                        <Navbar />
                    {/* </div> */}
                    <div className="flex-grow">
                    <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default RootLayout;