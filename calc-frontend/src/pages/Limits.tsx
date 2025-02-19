import { useNavigate } from "react-router"
import { Link } from "react-router"

// will show list of limit options to choose from
function Limits() {

  const navigate = useNavigate();

  return (
    <div>
      <button className="back-button" onClick={() => navigate(-1)}>&#8249; Back</button>

      <h2 className="topic-header m-auto w-fit">The Limit of Common Functions</h2>
      <div className="flex flex-col gap-6 items-center topic-list">

        <Link to="/limits/parabola" className="topic-box">
          <button className="px-10 text-2xl cursor-pointer">Parabola</button>
        </Link>


      </div>
    </div>

  )
}

export default Limits