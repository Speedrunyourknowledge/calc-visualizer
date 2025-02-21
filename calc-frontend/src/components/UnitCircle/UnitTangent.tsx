import { MathJax } from "better-react-mathjax"
import { useNavigate } from "react-router";

function UnitTangent()
{
  const navigate = useNavigate();

  return (
    <div> 
      <button className="back-button" onClick={()=> navigate(-1)}>&#8249; Back</button>
      <MathJax>
        <h2 style={{marginBottom:'1rem'}}>{"\\(\\tan(θ)\\)"} on the Unit Circle</h2>
      </MathJax>
      
      <div className="flex graph-outer-box">
        <iframe className = "graph-frame unit-frame" src="https://www.desmos.com/calculator/xjgvgerxbv?embed"  
                style={{border: "1px solid #ccc"}} >
        </iframe>

        <p className="big-p flex">
          <MathJax><span>{"\\(\\tan(θ)\\)"} is the slope at any point on the Unit Circle. 
            This is depicted by the green line in the triangle. The tangent graph on the right shows the value 
            of {"\\(\\tan(θ)\\)"} on the y&#8209;axis for each angle on the x&#8209;axis</span>
          </MathJax>
        </p>
      </div>
    
    </div>
  )
}

export default UnitTangent