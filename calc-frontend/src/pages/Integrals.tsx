import { Link } from "react-router"

// will show list of integral options to choose from
function Integrals(){

    return (
        <div>
            <h1>Integrals Page</h1>
            <Link to="/integrals/parabola">
            <button className="cursor-pointer">Integral for a parabola link</button>
            </Link>
        </div>
    )
}

export default Integrals