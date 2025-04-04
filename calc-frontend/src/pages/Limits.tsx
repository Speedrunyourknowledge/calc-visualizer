import { Link } from "react-router"

// will show list of limit options to choose from
function Limits() {

  return (
    <div>
      <Link to="/" tabIndex={-1}>
        <button className="back-button"> Back</button>
      </Link>

      <h2 className="topic-header m-auto w-fit">The Limit of Common Functions</h2>
      <div className="topic-list">

        <Link to="/limits/limitdef" tabIndex={-1} className="topic-box">
          <button className="px-10 text-2xl cursor-pointer">Definition of a Limit</button>
        </Link>

        <Link to="/limits/quadratic" tabIndex={-1} className="topic-box">
          <button className="link-title cursor-pointer">Quadratic</button>
        </Link>


      </div>
    </div>

  )
}

export default Limits