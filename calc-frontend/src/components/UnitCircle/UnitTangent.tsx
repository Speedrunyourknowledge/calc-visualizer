import { MathJax } from "better-react-mathjax"
import { Link } from "react-router";

function UnitTangent() {

  return (
    <div>
      <Link to="/unit-circle">
        <button className="back-button">Back</button>
      </Link>

      <MathJax>
        <h2 style={{ marginBottom: '1rem' }}>{"\\(\\tan(θ)\\)"} on the Unit Circle</h2>
      </MathJax>

      <div className="flex graph-outer-box">
        <iframe className="graph-frame unit-frame" src="https://www.desmos.com/calculator/9wzsprp36r?embed"
          style={{ border: "1px solid #ccc" }} >
        </iframe>

        <p className="big-p flex">
          <MathJax><span>{"\\(\\tan(θ)\\)"} is the slope at any point on the Unit Circle.
            This is depicted by the green line in the triangle. The tangent graph on the right shows the value
            of {"\\(\\tan(θ)\\)"} on the y&#8209;axis for each angle on the x&#8209;axis</span>
          </MathJax>
        </p>
      </div>

    </div>
  )
}

export default UnitTangent