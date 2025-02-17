import { useNavigate } from "react-router"
import { Link } from "react-router"


// will show list of integral options to choose from
function Integrals(){

  const navigate = useNavigate();

    return (
        <div>
          <button className="back-button" onClick={()=> navigate(-1)}>&#8249; Back</button>
          
          <div className="flex flex-col flex-grow justify-center gap-6 items-center">
          <h2 style={{marginBottom:'1rem'}}>The Integral of Common Functions</h2>


          <Link to="/integrals/linear">
          <button className="topic-button">Linear</button>
          </Link>

          <Link to="/integrals/parabola">
          <button className="topic-button">Parabola</button>
          </Link>

          <Link to="/integrals/cubic">
          <button className="topic-button">Cubic</button>
          </Link>

          <Link to="/integrals/euler">
          <button className="topic-button">Euler</button>
          </Link>

            <Link to="/integrals/natural-log">
            <button className="topic-button">Natural Log</button>
            </Link>
            
            <Link to="/integrals/sine">
            <button className="topic-button">Sine</button>
            </Link>

            <Link to="/integrals/cosine">
            <button className="topic-button">Cosine</button>
            </Link>

            <Link to="/integrals/tangent">
            <button className="topic-button">Tangent</button>
            </Link>

          </div>
        </div>
    )
}

export default Integrals