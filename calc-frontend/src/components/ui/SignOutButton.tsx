import { authClient } from "../../lib/auth-client"

function SignOutButton()
{
    const handleSignOut = async () => {
        try {
            await authClient.signOut();

        } catch (error) {
            alert("Something went wrong signout out.");
            console.error("Error signing out:", error);
        }   
    }

    return (
        <button className="back-button" onClick={handleSignOut}>Sign Out</button>
    )

}

export default SignOutButton