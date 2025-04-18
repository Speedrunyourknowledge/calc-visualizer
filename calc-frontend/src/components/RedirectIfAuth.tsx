import { Navigate, Outlet } from "react-router";
import { authClient } from "../lib/auth-client";

function RedirectIfAuth()
{
    const session = authClient.useSession();

    // user is not logged in - let them go to sign in page
    if(session.isPending || !session.data?.session) {
        return <Outlet/>
    }

    // user is logged in - take them to home
    return <Navigate to="/" replace/>
}

export default RedirectIfAuth;