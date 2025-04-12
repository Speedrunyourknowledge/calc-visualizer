import { useState } from "react";
import { authClient } from "../lib/auth-client";
import { FcGoogle } from "react-icons/fc";

function SignIn() {
  const [pendingGoogle, setPendingGoogle] = useState<boolean>(false);

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
          setPendingGoogle(true);
        },
        onResponse:() => {
          // keep loading until redirected to google

        }
      }
    )  
    setPendingGoogle(false);
  }

  return (
    <div className="flex items-center justify-center mt-[100px]">
    <div className="flex flex-col gap-2 bg-white p-6 pb-8 rounded-2xl shadow-md text-center ">
        <h1 className="text-2xl font-semibold mb-4">Sign in</h1>
        <button
            disabled={pendingGoogle}
            onClick={handleSignInGoogle}
            className="flex items-center gap-2 px-4 py-2 bg-white text-gray-800 border border-gray-300 
              rounded-md cursor-pointer auth-button">
            {pendingGoogle ? (
                <div className="flex items-center gap-2 w-50 justify-center">
                    <span className="loader animate-spin w-4 h-4 border-2 border-t-transparent 
                    border-gray-800 rounded-full"></span>
                    Signing in...
                </div>
            ) : (
                <div className="flex justify-center items-center gap-2 w-50">
                    <FcGoogle size={20} />Sign in with Google
                </div>
            )}
        </button>
    </div>
</div>

          
          
  )

}

export default SignIn;