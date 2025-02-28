import { Link } from "react-router"


// will show list of derivative options to choose from
function UnitCircle() {

  return (
    <div>
      <Link to="/">
        <button className="back-button"> Back</button>
      </Link>

      <h2 className="topic-header m-auto w-fit">Interpreting the Unit Circle</h2>
      <div className="flex flex-col gap-6 items-center topic-list">

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