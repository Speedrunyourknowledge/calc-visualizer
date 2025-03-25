import { Navigate, Outlet, } from "react-router";
import { useAuth } from "../App/AuthContext";

function ProtectedRoute()
{
    const { session } = useAuth();

    if(session === null) {
        return <Navigate to="/sign-in" replace />
    }
    return <Outlet/>
}

export default ProtectedRoute;