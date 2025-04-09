import { Link } from "react-router"


// will show list of integral options to choose from
function Integrals() {

  return (
    <div>
      <Link to="/" tabIndex={-1}>
        <button className="back-button"> Back</button>
      </Link>

      <h2 className="topic-header m-auto w-fit">The Integral of Common Functions</h2>
      <div className="topic-list">

        <Link to="/integrals/custom" tabIndex={-1} state={{func: 'x^2', bounds: [0, 5]}} 
          className="topic-box custom-border">
            
          <button className="link-title cursor-pointer">Custom</button>
        </Link>
  
        <Link to="/integrals/linear" tabIndex={-1} className="topic-box">
          <button className="link-title cursor-pointer">Linear</button>
        </Link>

        <Link to="/integrals/quadratic" tabIndex={-1} className="topic-box">
          <button className="link-title cursor-pointer">Quadratic</button>
        </Link>

        <Link to="/integrals/cubic" tabIndex={-1} className="topic-box">
          <button className="link-title cursor-pointer">Cubic</button>
        </Link>

        <Link to="/integrals/exponential" tabIndex={-1} className="topic-box">
          <button className="link-title cursor-pointer">Exponential</button>
        </Link>

        <Link to="/integrals/logarithmic" tabIndex={-1} className="topic-box">
          <button className="link-title cursor-pointer">Logarithmic</button>
        </Link>
  
        <Link to="/integrals/sine" tabIndex={-1} className="topic-box">
          <button className="link-title cursor-pointer">Sine</button>
        </Link>
  
        <Link to="/integrals/cosine" tabIndex={-1} className="topic-box">
          <button className="link-title cursor-pointer">Cosine</button>
        </Link>

        <Link to="/integrals/tangent" tabIndex={-1} className="topic-box">
          <button className="link-title cursor-pointer">Tangent</button>
        </Link>
  

      </div>
    </div>
  )
}

export default Integrals