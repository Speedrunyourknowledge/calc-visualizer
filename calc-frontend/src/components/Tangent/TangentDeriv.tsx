import { MathJax } from "better-react-mathjax"
import { Link } from "react-router";

function CubicIntegral() {

  return (
    <div>
      <Link to="/derivatives">
        <button className="back-button"> Back</button>
      </Link>
      <MathJax>
        <h2 style={{ marginBottom: '1rem' }}>Derivative of &nbsp;{"\\(y = \\tan(x)\\)"} </h2>
      </MathJax>

      <div className="flex graph-outer-box">
        <iframe className="graph-frame" src="https://www.desmos.com/calculator/4hzxwimehi?embed"
          style={{ border: "1px solid #ccc" }} >
        </iframe>

        <p className="big-p">
          <MathJax>The tangent function has vertical asymptotes at multiples of <span style={{ fontSize: '130%' }}>
            {"\\(x = \\frac{π}{2}\\)"}</span></MathJax>
        </p>

      </div>

    </div>
  )
}

export default CubicIntegral