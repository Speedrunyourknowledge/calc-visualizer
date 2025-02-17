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


          <Link to="/integrals/linear" className="topic-box">
          <button className="px-10 text-2xl cursor-pointer">Linear</button>
          </Link>

          <Link to="/integrals/parabola" className="topic-box">
          <button className="px-10 text-2xl cursor-pointer">Parabola</button>
          </Link>

          <Link to="/integrals/cubic" className="topic-box">
          <button className="px-10 text-2xl cursor-pointer">Cubic</button>
          </Link>

          <Link to="/integrals/euler" className="topic-box">
          <button className="px-10 text-2xl cursor-pointer">Euler</button>
          </Link>

            <Link to="/integrals/natural-log" className="topic-box">
            <button className="px-10 text-2xl cursor-pointer">Natural Log</button>
            </Link>
            
            <Link to="/integrals/sine" className="topic-box">
            <button className="px-10 text-2xl cursor-pointer">Sine</button>
            </Link>

            <Link to="/integrals/cosine" className="topic-box">
            <button className="px-10 text-2xl cursor-pointer">Cosine</button>
            </Link>

            <Link to="/integrals/tangent" className="topic-box">
            <button className="px-10 text-2xl cursor-pointer">Tangent</button>
            </Link>

          </div>
        </div>
    )
}

export default Integrals