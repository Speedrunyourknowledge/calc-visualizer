import { MathJax } from "better-react-mathjax";
import { Link } from "react-router";

function ParabolaInt()
{
  
  return (
    <div> 
      <Link to="/integrals">
        <button className="back-button"> Back</button>
      </Link>
      <MathJax>
          <h2 style={{marginBottom:'1rem'}}>Integral of &nbsp;{"\\(y = x^{2} \\)"} </h2>
      </MathJax>

      <div className="flex graph-outer-box">
        
      </div>
    </div>
  )
}

export default ParabolaInt