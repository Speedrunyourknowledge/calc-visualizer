import { Link } from "react-router"

// will show list of limit options to choose from
function Limits() {

  return (
    <div>
      <Link to="/">
        <button className="back-button"> Back</button>
      </Link>

      <h2 className="topic-header m-auto w-fit">The Limit of Common Functions</h2>
      <div className="flex flex-col gap-6 items-center topic-list">

        <Link to="/limits/limitdef" className="topic-box">
          <button className="px-10 text-2xl cursor-pointer">Definition of a Limit</button>
        </Link>


      </div>
    </div>

  )
}

export default Limits