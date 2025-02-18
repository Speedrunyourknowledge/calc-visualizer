import { MathJax } from "better-react-mathjax"
import { useNavigate } from "react-router";

function CubicIntegral()
{

  const navigate = useNavigate();

  return (
    <div>
      <button className="back-button" onClick={()=> navigate(-1)}>&#8249; Back</button>
      <MathJax>
        <h2 style={{marginBottom:'1rem'}}>Derivative of &nbsp;{"\\(y = e^{x} \\)"} </h2>
      </MathJax>

      <iframe className = "graph-frame" src="https://www.desmos.com/calculator/5fb4idx020?embed" 
              style={{border: "1px solid #ccc"}} >
      </iframe>
    
    </div>
  )
}

export default CubicIntegral