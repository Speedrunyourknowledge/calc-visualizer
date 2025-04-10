import { useState } from "react";
import { authClient } from "../lib/auth-client";
import { FcGoogle } from "react-icons/fc";
import { Blocks } from "react-loader-spinner";

function SignIn() {

  const [loaded, setLoaded] = useState<boolean>(true)

  const baseUrl = import.meta.env.VITE_FRONTEND_URL || "http://localhost:5173"

  const handleSignInGoogle = async () => {
    await authClient.signIn.social(
      {
        provider: "google",
        callbackURL: baseUrl, 
        errorCallbackURL: baseUrl + "/auth-error"
      },
      {
        onRequest: () => {
          // show loading
          setLoaded(false)
        },
        onResponse:() => {
          // keep loading until redirected to google

        }
      }
    )  
  }

  return (
      <div className="ml-auto mr-auto" style={{marginTop:'100px'}}>
          <div className="flex flex-col gap-1 bg-white p-6 rounded-2xl shadow-md text-center">
              <h1 className="text-xl font-semibold mb-4">Sign in</h1>
              <button
                onClick={handleSignInGoogle}
                className="flex items-center gap-2 px-4 py-2 
                  bg-zinc-100 hover:bg-zinc-200 text-gray-800 border border-gray-300 rounded-md cursor-pointer">
                <FcGoogle size={20} /> Sign in with Google
              </button>

          </div>

          {
            loaded? null :
            <Blocks height="80" width="80" color="#4fa94d" ariaLabel="loading" 
              wrapperStyle={{marginLeft:'auto', marginRight:'auto'}}
              wrapperClass="blocks-wrapper loading" visible={true}
            />
          }
          
      </div>
  )

}

export default SignIn;