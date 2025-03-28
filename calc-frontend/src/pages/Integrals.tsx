import { Link } from "react-router"


// will show list of integral options to choose from
function Integrals() {

  return (
    <div>
      <Link to="/">
        <button className="back-button"> Back</button>
      </Link>

      <h2 className="topic-header m-auto w-fit">The Integral of Common Functions</h2>
      <div className="topic-list">

        <Link to="/integrals/custom" className="topic-box">
          <button className="link-title cursor-pointer">Custom</button>
        </Link>
  
        <Link to="/integrals/linear" className="topic-box">
          <button className="link-title cursor-pointer">Linear</button>
        </Link>

        <Link to="/integrals/quadratic" className="topic-box">
          <button className="link-title cursor-pointer">Quadratic</button>
        </Link>

        <Link to="/integrals/cubic" className="topic-box">
          <button className="link-title cursor-pointer">Cubic</button>
        </Link>

        <Link to="/integrals/exponential" className="topic-box">
          <button className="link-title cursor-pointer">Exponential</button>
        </Link>

        <Link to="/integrals/logarithmic" className="topic-box">
          <button className="link-title cursor-pointer">Logarithmic</button>
        </Link>
  
        <Link to="/integrals/sine" className="topic-box">
          <button className="link-title cursor-pointer">Sine</button>
        </Link>
  
        <Link to="/integrals/cosine" className="topic-box">
          <button className="link-title cursor-pointer">Cosine</button>
        </Link>

        <Link to="/integrals/tangent" className="topic-box">
          <button className="link-title cursor-pointer">Tangent</button>
        </Link>
  

      </div>
    </div>
  )
}

export default Integrals