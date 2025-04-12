import { authClient } from "../../lib/auth-client"

function SignOutButton()
{
    const handleSignOut = async () => {
        try {
            await authClient.signOut();

        } catch (error) {
            console.error("Error signing out: ", error);
        }   
    }

    return (
        <button className="link-box cursor-pointer" onClick={handleSignOut}>Sign Out</button>
    )

}

export default SignOutButton