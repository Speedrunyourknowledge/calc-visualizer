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
          <h2 style={{marginBottom:'1rem'}}>&nbsp;&nbsp;{"\\(\\int_0^5 sin(x) \\,dx\\)"} </h2>
      </MathJax>

      <div className="flex graph-outer-box">
        <IntGraph />

        <p className="big-p flex">
            The rectangles represent the Midpoint Sum method of estimating the area under the curve. As the number 
            of rectangles approaches infinity, the estimate gets closer to the true area, which is found 
            using the integral. Green rectangles signify positive area, and 
            red rectangles signify negative area.
        </p>
      </div>
    </div>
  )
}

export default SineInt