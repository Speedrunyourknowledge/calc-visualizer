import { Navigate, Outlet, } from "react-router";
import { authClient } from "../lib/auth-client";
import { Blocks } from "react-loader-spinner";

function ProtectedRoute()
{
    const session = authClient.useSession();

    // show loading if waiting for session info
    if(session.isPending){
        return  <Blocks height="80" width="80" color="#4fa94d" ariaLabel="loading" 
          wrapperStyle={{marginLeft:'auto', marginRight:'auto'}}
          wrapperClass="blocks-wrapper loading" visible={true}
          />
    }

    // user is not logged in - go to sign in page
    if(!session.data?.session) {
        return <Navigate to="/sign-in" replace />
    }

    // user is logged in - go to target page
    return <Outlet/>
}

export default ProtectedRoute;