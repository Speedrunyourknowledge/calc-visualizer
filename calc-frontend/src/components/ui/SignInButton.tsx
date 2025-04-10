import { Link } from "react-router"

function SignInButton() {
    return (
        <Link to="/sign-in" tabIndex={-1}>
            <button className="back-button">Sign In</button>
        </Link>
    )
}

export default SignInButton;