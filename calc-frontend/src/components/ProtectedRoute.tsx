import { Navigate, Outlet, } from "react-router";
import { useAuth } from "../App/AuthContext";
import { Blocks } from "react-loader-spinner";

function ProtectedRoute()
{
    const { session, isPending } = useAuth();

    // show loading if waiting for session info
    if(isPending){
        return  <Blocks height="80" width="80" color="#4fa94d" ariaLabel="loading" 
          wrapperStyle={{marginLeft:'auto', marginRight:'auto'}}
          wrapperClass="blocks-wrapper loading" visible={true}
          />
    }

    // user is not logged in - go to sign in page
    if(!session) {
        return <Navigate to="/sign-in" replace />
    }

    // user is logged in - go to target page
    return <Outlet/>
}

export default ProtectedRoute;