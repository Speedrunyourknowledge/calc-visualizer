import { MathJax } from "better-react-mathjax"
import { useNavigate } from "react-router";

function CubicIntegral()
{

  const navigate = useNavigate();
  
  return (
    <div> 
      <button className="back-button" onClick={()=> navigate(-1)}>&#8249; Back</button>
      <MathJax>
        <h2 style={{marginBottom:'1rem'}}>Derivative of &nbsp;{"\\(y = \\tan(x)\\)"} </h2>
      </MathJax>
      
      <div className="flex graph-outer-box">
        <iframe className = "graph-frame" src="https://www.desmos.com/calculator/4t2g6fpc3s?embed" 
                style={{border: "1px solid #ccc"}} >
        </iframe>

        <p className="big-p">
          <MathJax>The tangent function has vertical asymptotes at multiples of {"\\(x = \\frac{π}{2}\\)"}</MathJax>
        </p>

      </div>
    
    </div>
  )
}

export default CubicIntegral