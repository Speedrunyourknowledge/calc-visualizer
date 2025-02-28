import { MathJax } from "better-react-mathjax";
import { Link } from "react-router";
import IntNatLogGraph from "./IntNatLogGraph"

function NatLogInt() {

  return (
   <div> 
  <Link to="/integrals">
    <button className="back-button">Back</button>
  </Link>
    
  <MathJax>
    <h2 className="center-header">
      {"\\(\\int_{.01}^{10} ln(x) \\,dx\\)"}
    </h2>
  </MathJax>

  <div className="graph-outer-box" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <IntNatLogGraph />
  </div>

</div>

  )
}

export default NatLogInt