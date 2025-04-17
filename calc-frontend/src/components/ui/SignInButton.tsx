import { Link } from "react-router"

function SignInButton() {
    return (
        <Link to="/sign-in" tabIndex={-1}>
            <button className="link-box cursor-pointer" style={{borderRadius:'5px'}}>Sign In</button>
        </Link>
    )
}

export default SignInButton;