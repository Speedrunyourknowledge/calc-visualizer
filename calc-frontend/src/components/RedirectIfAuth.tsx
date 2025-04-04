import { Navigate, Outlet } from "react-router";
import { useAuth } from "../App/AuthContext";

function RedirectIfAuth()
{
    const { session } = useAuth();

    // user is not logged in - let them go to the page
    if(session === null) {
        return <Outlet/>
    }
    return <Navigate to="/" replace/>
}

export default RedirectIfAuth;