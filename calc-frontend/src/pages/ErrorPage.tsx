import { Link } from "react-router"

function ErrorPage(){

    return (
        <div className="flex flex-col items-center gap-5">
            <h1 className="error-title">Oops!</h1>
            <p className="font-medium text-2xl">Looks like the limit of this page doesn't exist.</p>
            <p className="font-medium text-2xl">You may have mistyped the address or the page may have moved.</p>

            <Link to="/" tabIndex={-1}>
              <button className="link-box cursor-pointer" style={{borderRadius:'5px'}}>Back to Home</button>
            </Link>
        </div>
    )

}

export default ErrorPage