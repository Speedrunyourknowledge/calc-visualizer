import { MathJax } from "better-react-mathjax"
import { useNavigate } from "react-router";

function NatLogDeriv(){

  const navigate = useNavigate();

  return (
    <div> 
      <button className="back-button" onClick={()=> navigate(-1)}>&#8249; Back</button>
      <MathJax>
        <h2 style={{marginBottom:'1rem'}}>Derivative of &nbsp;{"\\(y = \\ln(x)\\)"} </h2>
      </MathJax>
      
      <div className="flex gap-4 graph-outer-box">
        <iframe className = "graph-frame" src="https://www.desmos.com/calculator/2ioddrf9fi?embed" 
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