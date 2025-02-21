import { MathJax } from "better-react-mathjax"
import { Link } from "react-router";

function LineDeriv()
{

  return (
      <div>
        <Link to="/derivatives">
        <button className="back-button"> Back</button>
      </Link> 
        <MathJax>
          <h2 style={{marginBottom:'1rem'}}>Derivative of &nbsp;{"\\(y = \\frac{1}{2} x\\)"} </h2>
        </MathJax>
        
        <div className="flex graph-outer-box">
          <iframe className = "graph-frame" src="https://www.desmos.com/calculator/opyeqlknbm?embed" 
                  style={{border: "1px solid #ccc"}} >
          </iframe>

          <p className="big-p">
            <MathJax>The linear function has a constant slope equal to <span style={{fontSize:'130%'}}>
              {"\\(\\frac{Δy}{Δx}\\)"}</span></MathJax>
          </p>

        </div>
        
      </div>
  )
}

export default LineDeriv