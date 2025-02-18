import { MathJax } from "better-react-mathjax"
import { useNavigate } from "react-router";

function CosineDeriv()
{

  const navigate = useNavigate();

  return (
    <div> 
      <button className="back-button" onClick={()=> navigate(-1)}>&#8249; Back</button>
      <MathJax>
        <h2 style={{marginBottom:'1rem'}}>Derivative of &nbsp;{"\\(y = \\cos(x)\\)"} </h2>
      </MathJax>
      
      <iframe className = "graph-frame" src="https://www.desmos.com/calculator/eryny7fmhk?embed" 
              style={{border: "1px solid #ccc"}} >
      </iframe>
    
    </div>
  )
}

export default CosineDeriv