import { authClient } from "../../lib/auth-client"
import { useNavigate } from "react-router";

function SignOutButton()
{
  const navigate = useNavigate()

    const handleSignOut = async () => {
        try {
            await authClient.signOut({
              fetchOptions: {
                onSuccess: () => {
                  navigate("/"); // redirect to home
                },
                withCredentials:true
              }
            });
        } catch (error) {
            console.error("Error signing out: ", error);
        }   
    }

    return (
        <button className="link-box cursor-pointer" onClick={handleSignOut}>Sign Out</button>
    )

}

export default SignOutButton