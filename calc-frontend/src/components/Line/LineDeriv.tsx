import { MathJax } from "better-react-mathjax"
import { useNavigate } from "react-router";

function LineDeriv()
{

  const navigate = useNavigate();

  return (
      <div> 
        <button className="back-button" onClick={()=> navigate(-1)}>&#8249; Back</button>
        <MathJax>
          <h2 style={{marginBottom:'1rem'}}>Derivative of &nbsp;{"\\(y = \\frac{1}{2} x\\)"} </h2>
        </MathJax>
        
        <div className="flex gap-4 graph-outer-box">
          <iframe className = "graph-frame" src="https://www.desmos.com/calculator/opyeqlknbm?embed" 
                  style={{border: "1px solid #ccc"}} >
          </iframe>

          <p className="big-p">
            <MathJax>The linear function has a constant slope equal to {"\\(\\frac{Δy}{Δx}\\)"}</MathJax>
          </p>

        </div>
        
      </div>
  )
}

export default LineDeriv