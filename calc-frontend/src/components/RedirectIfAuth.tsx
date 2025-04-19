import { Navigate, Outlet } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../App/AuthProvider";

function RedirectIfAuth()
{
  const {session, isPending} = useContext(AuthContext);

    // user is not logged in - let them go to sign in page
    if(isPending || !session) {
        return <Outlet/>
    }

    // user is logged in - take them to home
    return <Navigate to="/" replace/>
}

export default RedirectIfAuth;