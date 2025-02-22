import { MathJax } from "better-react-mathjax"
import { Link } from "react-router";

function ParabolaDeriv(){

  return (
      <div>
        <Link to="/derivatives">
        <button className="back-button"> Back</button>
      </Link>
        <MathJax>
          <h2 style={{marginBottom:'1rem'}}>Derivative of &nbsp;{"\\(y = x^{2} \\)"} </h2>
        </MathJax>

        <div className="flex graph-outer-box">
          <iframe className = "graph-frame" src="https://www.desmos.com/calculator/phq9sqq94c?embed" 
                  style={{border: "1px solid #ccc"}} >
          </iframe>

          <p className="big-p flex">
            The parabola function squares each input value, raising it to the second power
          </p>
        </div>
        
      </div>
  )
}

export default ParabolaDeriv