import { useNavigate } from "react-router"
import { Link } from "react-router"


// will show list of derivative options to choose from
function Derivatives() {

  const navigate = useNavigate();

  return (
    <div>
      <button className="back-button" onClick={() => navigate(-1)}>&#8249; Back</button>
      <h2 style={{ marginBottom: '1rem' }}>The Derivative of Common Functions</h2>

      <div className="flex flex-col flex-grow justify-center gap-6">

        <Link to="/derivatives/linear">
          <button className="topic-button">Linear</button>
        </Link>

        <Link to="/derivatives/parabola">
          <button className="topic-button">Parabola</button>
        </Link>

        <Link to="/derivatives/cubic">
          <button className="topic-button">Cubic</button>
        </Link>

        <Link to="/derivatives/euler">
          <button className="topic-button">Euler</button>
        </Link>

        <Link to="/derivatives/natural-log">
          <button className="topic-button">Natural Log</button>
        </Link>

        <Link to="/derivatives/sine">
          <button className="topic-button">Sine</button>
        </Link>

        <Link to="/derivatives/cosine">
          <button className="topic-button">Cosine</button>
        </Link>

        <Link to="/derivatives/tangent">
          <button className="topic-button">Tangent</button>
        </Link>

      </div>
    </div>
  )
}

export default Derivatives