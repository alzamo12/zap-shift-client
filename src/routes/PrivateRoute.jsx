import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../components/Shared/LoadingSpinner/LoadingSpinner";
import useAuth from "../hooks/useAuth";
import { IoReturnUpBackOutline } from "react-icons/io5";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    console.log(loading)

    if (loading) return <LoadingSpinner />
    if (!user) return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    return children
};

export default PrivateRoute;