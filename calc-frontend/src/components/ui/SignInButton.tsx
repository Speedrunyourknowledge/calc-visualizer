import { Link } from "react-router"

function SignInButton() {
    return (
        <Link to="/sign-in">
            <button className="back-button">Sign In</button>
        </Link>
    )
}

export default SignInButton;