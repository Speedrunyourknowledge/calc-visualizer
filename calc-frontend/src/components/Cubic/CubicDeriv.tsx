import { MathJax } from "better-react-mathjax"
import { Link } from "react-router";

function CubicDeriv() {

  return (
    <div>
      <Link to="/derivatives">
        <button className="back-button"> Back</button>
      </Link>
      <MathJax>
        <h2 style={{ marginBottom: '1rem' }}>Derivative of &nbsp;{"\\(y = x^{3} \\)"} </h2>
      </MathJax>

      <div className="flex graph-outer-box">
        <iframe className="graph-frame" src="https://www.desmos.com/calculator/wzc7pioeji?embed"
          style={{ border: "1px solid #ccc" }} >
        </iframe>

        <p className="big-p flex">
          The cubic function cubes each input value, raising it to the third power
        </p>
      </div>

    </div>

  )
}

export default CubicDeriv