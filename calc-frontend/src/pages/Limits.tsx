import { Link } from "react-router"

// will show list of limit options to choose from
function Limits() {

    return (
        <div>
            <h1>Limits Page</h1>
            <Link to="/limits/parabola">
            <button className="cursor-pointer">Limit for a parabola link</button>
            </Link>
        </div>

    )
}

export default Limits