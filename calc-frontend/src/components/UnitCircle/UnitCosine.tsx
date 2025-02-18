import { MathJax } from "better-react-mathjax"
import { useNavigate } from "react-router";

function UnitCosine()
{
  const navigate = useNavigate();

  return (
    <div> 
      <button className="back-button" onClick={()=> navigate(-1)}>&#8249; Back</button>
      <MathJax>
        <h2 style={{marginBottom:'1rem'}}>{"\\(\\cos(x)\\)"} on the Unit Circle</h2>
      </MathJax>
      
      <iframe className = "graph-frame unit-frame" src="https://www.desmos.com/calculator/3h1qvy6omf?embed"  
              style={{border: "1px solid #ccc"}} >
      </iframe>
    
    </div>
  )
}

export default UnitCosine