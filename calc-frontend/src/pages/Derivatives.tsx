import { useNavigate } from "react-router"
import { Link } from "react-router"


// will show list of derivative options to choose from
function Derivatives() {

  const navigate = useNavigate();

  return (
    <div>
      <button className="back-button" onClick={() => navigate(-1)}>&#8249; Back</button>

      <div className="flex flex-col flex-grow justify-center gap-6 items-center topic-list">
        <h2 className = "topic-header">The Derivative of Common Functions</h2>
        
        <Link to="/derivatives/linear" className="topic-box">
          <button className="px-10 text-2xl cursor-pointer">Linear</button>
        </Link>

        <Link to="/derivatives/parabola" className="topic-box">
          <button className="px-10 text-2xl cursor-pointer">Parabola</button>
        </Link>

        <Link to="/derivatives/cubic" className="topic-box">
          <button className="px-10 text-2xl cursor-pointer">Cubic</button>
        </Link>

        <Link to="/derivatives/euler" className="topic-box">
          <button className="px-10 text-2xl cursor-pointer">Euler</button>
        </Link>

        <Link to="/derivatives/natural-log" className="topic-box">
          <button className="px-10 text-2xl cursor-pointer">Natural Log</button>
        </Link>

        <Link to="/derivatives/sine" className="topic-box">
          <button className="px-10 text-2xl cursor-pointer">Sine</button>
        </Link>

        <Link to="/derivatives/cosine" className="topic-box">
          <button className="px-10 text-2xl cursor-pointer">Cosine</button>
        </Link>

        <Link to="/derivatives/tangent" className="topic-box">
          <button className="px-10 text-2xl cursor-pointer">Tangent</button>
        </Link>

      </div>
    </div>
  )
}

export default Derivatives