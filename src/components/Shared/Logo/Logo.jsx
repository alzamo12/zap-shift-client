import { Link } from "react-router";
import logo from "../../../assets/logo.png"

const Logo = () => {
    return (
        <Link to="/" className='relative'>
            <img className='w-6' src={logo} alt="" />
            <p className='absolute w-32 top-2 left-5 font-bold text-xl'>Zap Shift</p>
        </Link>
    );
};

export default Logo;