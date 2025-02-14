import { useNavigate } from "react-router"

function ErrorPage(){
    const navigate = useNavigate();

    return (
        <div>
            <h1 className="text-5xl">Oops!</h1>
            <p>This page doesn't seem to exist</p>
            <p>You may have mistyped the address or the page may have moved</p>
            <button className="back-button" onClick={()=> navigate("/")}>Back to Home</button>
        </div>
    )

}

export default ErrorPage