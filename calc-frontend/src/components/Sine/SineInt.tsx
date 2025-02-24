import { MathJax } from "better-react-mathjax";
import { Link } from "react-router";
import IntGraph from "../Sine/IntGraph"

function SineInt() {

  return (
    <div> 
      <Link to="/integrals">
        <button className="back-button"> Back</button>
      </Link>
      <MathJax>
          <h2 style={{marginBottom:'1rem'}}>Integral of &nbsp;{"\\(y = \\sin(x)\\)"} </h2>
      </MathJax>

      <div className="flex graph-outer-box">
        <IntGraph />
      </div>
    </div>
  )
}

export default SineInt