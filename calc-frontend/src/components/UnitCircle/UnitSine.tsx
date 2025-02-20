import { MathJax } from "better-react-mathjax"
import { useNavigate } from "react-router";

function UnitSine()
{
  const navigate = useNavigate();

  return (
    <div> 
      <button className="back-button" onClick={()=> navigate(-1)}>&#8249; Back</button>
      <MathJax>
        <h2 style={{marginBottom:'1rem'}}>{"\\(\\sin(θ)\\)"} on the Unit Circle</h2>
      </MathJax>
      
      <div className="flex graph-outer-box">
        <iframe className = "graph-frame unit-frame" src="https://www.desmos.com/calculator/giprp93pt8?embed"  
                style={{border: "1px solid #ccc"}} >
        </iframe>

        <p className="big-p flex">
          <MathJax><span>{"\\(\\sin(θ)\\)"} is the y&#8209;coordinate on the Unit Circle. This is depicted
            by the green line in the triangle. The sine graph also shows the value of {"\\(\\sin(θ)\\)"}</span>
          </MathJax>
        </p>
      </div>
    
    </div>
  )
}

export default UnitSine