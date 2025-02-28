import { MathJax } from "better-react-mathjax";
import { Link } from "react-router";
import IntSineGraph from "./IntSineGraph"

function SineInt() {

  return (
   <div> 
  <Link to="/integrals">
    <button className="back-button">Back</button>
  </Link>
  
  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
    
    <MathJax>
      <h2 style={{ marginBottom: '1rem' }}>
        {"\\(\\int_0^5 sin(x) \\,dx\\)"}
      </h2>
    </MathJax>

    <div className="graph-outer-box" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <IntSineGraph />
    </div>

  </div>

</div>

  )
}

export default SineInt