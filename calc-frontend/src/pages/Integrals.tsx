import { Link } from "react-router"


// will show list of integral options to choose from
function Integrals() {

  return (
    <div>
      <h2 className="topic-header m-auto w-fit">The Integral of Common Functions</h2>
      <div className="flex flex-col gap-6 items-center topic-list">

        <Link to="/integrals/custom" className="topic-box">
          <button className="px-10 text-2xl cursor-pointer">Custom</button>
        </Link>
  
        <Link to="/integrals/linear" className="topic-box">
          <button className="px-10 text-2xl cursor-pointer">Linear</button>
        </Link>

        <Link to="/integrals/quadratic" className="topic-box">
          <button className="px-10 text-2xl cursor-pointer">Quadratic</button>
        </Link>

        <Link to="/integrals/cubic" className="topic-box">
          <button className="px-10 text-2xl cursor-pointer">Cubic</button>
        </Link>

        <Link to="/integrals/exponential" className="topic-box">
          <button className="px-10 text-2xl cursor-pointer">Exponential</button>
        </Link>

        <Link to="/integrals/logarithmic" className="topic-box">
          <button className="px-10 text-2xl cursor-pointer">Logarithmic</button>
        </Link>
  
        <Link to="/integrals/sine" className="topic-box">
          <button className="px-10 text-2xl cursor-pointer">Sine</button>
        </Link>
  
        <Link to="/integrals/cosine" className="topic-box">
          <button className="px-10 text-2xl cursor-pointer">Cosine</button>
        </Link>

        <Link to="/integrals/tangent" className="topic-box">
          <button className="px-10 text-2xl cursor-pointer">Tangent</button>
        </Link>
  

      </div>
    </div>
  )
}

export default Integrals