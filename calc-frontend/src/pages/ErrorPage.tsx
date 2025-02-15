import { useNavigate } from "react-router"

function ErrorPage(){
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center gap-5">
            <h1 className="error-title">Oops!</h1>
            <p className="font-medium text-2xl">Looks like the limit of this page doesn't exist.</p>
            <p className="font-medium text-2xl">You may have mistyped the address or the page may have moved.</p>
            <button className="back-button" onClick={()=> navigate("/")}>Back to Home</button>
        </div>
    )

}

export default ErrorPage