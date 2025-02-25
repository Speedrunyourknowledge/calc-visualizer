import { MathJax } from "better-react-mathjax"
import { Link } from "react-router";

function NatLogDeriv(){

  return (
    <div> 
      <Link to="/derivatives">
        <button className="back-button"> Back</button>
      </Link>
      <MathJax>
        <h2 style={{marginBottom:'1rem'}}>Derivative of &nbsp;{"\\(y = \\ln(x)\\)"} </h2>
      </MathJax>
      
      <div className="flex graph-outer-box">
        <iframe className = "graph-frame" src="https://www.desmos.com/calculator/2oftga01j8?embed"
                style={{border: "1px solid #ccc"}} >
        </iframe>

        <p className="big-p flex">
          <MathJax>The logarithmic function grows the slowest. It naturally has a vertical asymptote 
            at {"\\(x = 0 \\)"}. <br/> {"\\(\\ln(x)\\)"} is the same as {"\\(\\log_{e}x \\)"}. <br/>
            Logarithms are the inverse of exponents, so {"\\(y = \\ln(x)\\)"} is just {"\\(y = e^{x}\\)"} rotated 
            180 degrees.
          </MathJax> 
        </p>
      </div>
    
    </div>

      
  )
}

export default NatLogDeriv