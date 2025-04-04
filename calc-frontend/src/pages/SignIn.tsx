import { Github } from "lucide-react";
import { authClient } from "../lib/auth-client";
import { ErrorContext } from "better-auth/react";
import { FcGoogle } from "react-icons/fc";

function SignIn() {
    const handleSignInGithub = async () => {
        const data = await authClient.signIn.social({
            provider: "github"
        },
            {
                onError: (ctx: ErrorContext) => { alert(`Something went wrong: ${ctx.error.message}`) }
            }
        )
    }

    const handleSignInGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google"
        },
            {
                onError: (ctx: ErrorContext) => { alert(`Something went wrong: ${ctx.error.message}`) }
            }
        )
        
    }

    return (
        <div className="flex items-center justify-center h-screen -mt-25">
            <div className="flex flex-col gap-2 bg-white p-6 rounded-2xl shadow-md text-center ">
                <h1 className="text-2xl font-semibold mb-4">Sign in</h1>
                <button onClick={handleSignInGithub} className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-md cursor-pointer">
                    <Github size={20} /> Sign in with GitHub
                </button>
                <button
                    onClick={handleSignInGoogle}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md cursor-pointer">
                    <FcGoogle size={20} /> Sign in with Google
                </button>
            </div>
        </div>
    )

}

export default SignIn;