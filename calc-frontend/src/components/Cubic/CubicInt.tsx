import { MathJax } from "better-react-mathjax";
import { Link } from "react-router";
import IntCubicGraph from "./IntCubicGraph"

function CubicInt() {

  return (
   <div> 
  <Link to="/integrals">
    <button className="back-button">Back</button>
  </Link>
      
  <MathJax>
    <h2 className="center-header">
      {"\\(\\int_{^-2}^{4} x^3 \\,dx\\)"}
    </h2>
  </MathJax>

  <div className="graph-outer-box" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <IntCubicGraph />
  </div>

</div>

  )
}

export default CubicInt