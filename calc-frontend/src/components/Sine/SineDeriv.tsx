import { MathJax } from "better-react-mathjax"
import { useNavigate } from "react-router";

function SineDeriv()
{
  const navigate = useNavigate();

  return (
    <div> 
      <button className="back-button" onClick={()=> navigate(-1)}>&#8249; Back</button>
      <MathJax>
        <h2 style={{marginBottom:'1rem'}}>Derivative of &nbsp;{"\\(y = \\sin(x)\\)"} </h2>
      </MathJax>
      
      <div className="flex graph-outer-box">
        <iframe className = "graph-frame" src="https://www.desmos.com/calculator/bdxrwxldzr?embed"  
                style={{border: "1px solid #ccc"}} >
        </iframe>

        <p className="big-p">
            <MathJax>The sine function starts at 0 and ends at 0 in the interval [0, 2{"\\(π\\)"}]</MathJax>
        </p>
      </div>
    
    </div>
  )
}

export default SineDeriv