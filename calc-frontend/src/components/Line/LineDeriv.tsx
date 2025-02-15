import { MathJax } from "better-react-mathjax"
import { useNavigate } from "react-router";

function LineDeriv()
{

  const navigate = useNavigate();

  return (
      <div> 
        <button className="back-button" onClick={()=> navigate(-1)}>&#8249; Back</button>
        <MathJax>
          <h2 style={{marginBottom:'1rem'}}>Derivative of &nbsp;{"\\(y = \\frac{1}{2} x\\)"} </h2>
        </MathJax>
        
        <iframe src="https://www.desmos.com/calculator/7fswj3rgdh?embed" width="500" height="500" 
                style={{border: "1px solid #ccc"}} >
        </iframe>
        
      </div>
  )
}

export default LineDeriv