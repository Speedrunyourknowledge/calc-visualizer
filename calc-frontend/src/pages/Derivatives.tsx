import { Link } from "react-router"


// will show list of derivative options to choose from
function Derivatives() {

  return (
    <div>
      <Link to="/" tabIndex={-1}>
        <button className="back-button"> Back</button>
      </Link>

      <h2 className="topic-header m-auto w-fit">The Derivative of Common Functions</h2>
      <div className="topic-list">

        <Link to="/derivatives/custom" tabIndex={-1} className="topic-box custom-border">
          <button className="link-title cursor-pointer">Custom</button>
        </Link>

        <Link to="/derivatives/linear" tabIndex={-1} className="topic-box">
          <button className="link-title cursor-pointer">Linear</button>
        </Link>

        <Link to="/derivatives/quadratic" tabIndex={-1} className="topic-box">
          <button className="link-title cursor-pointer">Quadratic</button>
        </Link>

        <Link to="/derivatives/cubic" tabIndex={-1} className="topic-box">
          <button className="link-title cursor-pointer">Cubic</button>
        </Link>

        <Link to="/derivatives/exponential" tabIndex={-1} className="topic-box">
          <button className="link-title cursor-pointer">Exponential</button>
        </Link>

        <Link to="/derivatives/logarithmic" tabIndex={-1} className="topic-box">
          <button className="link-title cursor-pointer">Logarithmic</button>
        </Link>

        <Link to="/derivatives/sine" tabIndex={-1} className="topic-box">
          <button className="link-title cursor-pointer">Sine</button>
        </Link>

        <Link to="/derivatives/cosine" tabIndex={-1} className="topic-box">
          <button className="link-title cursor-pointer">Cosine</button>
        </Link>

        <Link to="/derivatives/tangent" tabIndex={-1} className="topic-box">
          <button className="link-title cursor-pointer">Tangent</button>
        </Link>

      </div>
    </div>
  )
}

export default Derivatives