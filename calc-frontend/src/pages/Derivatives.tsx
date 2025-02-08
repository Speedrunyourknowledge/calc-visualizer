import { Link } from "react-router"

// will show list of derivative options to choose from
function Derivatives(){

    return (
        <div>
            <h1>Derivatives</h1>
            <Link to="/derivatives/parabola">
            <button className="cursor-pointer">Derivative for a parabola link</button>
            </Link>
        </div>
    )
}

export default Derivatives