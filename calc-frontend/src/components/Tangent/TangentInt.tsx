import { MathJax } from "better-react-mathjax";
import { Link } from "react-router";
import IntTangentGraph from "./IntTangentGraph"

function TangentInt() {

  return (
    <div>
      <Link to="/integrals">
        <button className="back-button">Back</button>
      </Link>

      <MathJax>
        <h2 className="center-header">
          {"\\(\\int_0^{1.5} tan(x) \\,dx\\)"}
        </h2>
      </MathJax>

      <div className="graph-outer-box" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <IntTangentGraph />
      </div>

    </div>

  )
}

export default TangentInt