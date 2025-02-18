import { useNavigate } from "react-router"
import { Link } from "react-router"


// will show list of derivative options to choose from
function UnitCircle() {

  const navigate = useNavigate();

  return (
    <div>
      <button className="back-button" onClick={() => navigate(-1)}>&#8249; Back</button>

      <div className="flex flex-col flex-grow justify-center gap-6 items-center topic-list">
        <h2 className = "topic-header">Interpreting the Unit Circle</h2>
        
        <Link to="/unit-circle/sine" className="topic-box">
          <button className="px-10 text-2xl cursor-pointer">Sine</button>
        </Link>

        <Link to="/unit-circle/cosine" className="topic-box">
          <button className="px-10 text-2xl cursor-pointer">Cosine</button>
        </Link>

        <Link to="/unit-circle/tangent" className="topic-box">
          <button className="px-10 text-2xl cursor-pointer">Tangent</button>
        </Link>

      </div>
    </div>
  )
}

export default UnitCircle