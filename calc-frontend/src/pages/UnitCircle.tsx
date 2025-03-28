import { Link } from "react-router"


// will show list of derivative options to choose from
function UnitCircle() {

  return (
    <div>
      <Link to="/">
        <button className="back-button"> Back</button>
      </Link>

      <h2 className="topic-header m-auto w-fit">Interpreting the Unit Circle</h2>
      <div className="topic-list topic-list-3">

        <Link to="/unit-circle/sine" className="topic-box">
          <button className="link-title cursor-pointer">Sine</button>
        </Link>

        <Link to="/unit-circle/cosine" className="topic-box">
          <button className="link-title cursor-pointer">Cosine</button>
        </Link>

        <Link to="/unit-circle/tangent" className="topic-box">
          <button className="link-title cursor-pointer">Tangent</button>
        </Link>

      </div>
    </div>
  )
}

export default UnitCircle