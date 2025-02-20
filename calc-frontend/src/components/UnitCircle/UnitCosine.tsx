import { MathJax } from "better-react-mathjax"
import { useNavigate } from "react-router";

function UnitCosine()
{
  const navigate = useNavigate();

  return (
    <div> 
      <button className="back-button" onClick={()=> navigate(-1)}>&#8249; Back</button>
      <MathJax>
        <h2 style={{marginBottom:'1rem'}}>{"\\(\\cos(θ)\\)"} on the Unit Circle</h2>
      </MathJax>

      <div className="flex graph-outer-box">
        <iframe className = "graph-frame unit-frame" src="https://www.desmos.com/calculator/3h1qvy6omf?embed"  
                style={{border: "1px solid #ccc"}} >
        </iframe>

        <p className="big-p">
          <MathJax><span>{"\\(\\cos(θ)\\)"} is the x&#8209;coordinate on the Unit Circle. This is depicted
            by the green line in the triangle. The cosine graph also shows the value of {"\\(\\cos(θ)\\)"}</span>
          </MathJax>
        </p>
      </div>
    
    </div>
  )
}

export default UnitCosine