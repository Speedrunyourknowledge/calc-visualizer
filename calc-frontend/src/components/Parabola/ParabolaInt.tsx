import { MathJax } from "better-react-mathjax";
import { Link } from "react-router";
import IntParabolaGraph from "./IntParabolaGraph"

function ParabolaInt() {

  return (
   <div> 
  <Link to="/integrals">
    <button className="back-button">Back</button>
  </Link>
  
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
    
    <MathJax>
      <h2 style={{ marginBottom: '1rem' }}>
        {"\\(\\int_{^-5}^{5} x^2 \\,dx\\)"}
      </h2>
    </MathJax>

    <div className="graph-outer-box" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <IntParabolaGraph />
    </div>

  </div>

</div>

  )
}

export default ParabolaInt