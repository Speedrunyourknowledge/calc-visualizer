import { Navigate, Outlet } from "react-router";
import { useAuth } from "../App/AuthContext";

function RedirectIfAuth()
{
    const { session, isPending } = useAuth();

    // user is not logged in - let them go to sign in page
    if(isPending || !session) {
        return <Outlet/>
    }

    // user is logged in - take them to home
    return <Navigate to="/" replace/>
}

export default RedirectIfAuth;