import { MathJax } from "better-react-mathjax"
import { useNavigate } from "react-router";

function ParabolaDeriv(){

  const navigate = useNavigate();

  return (
      <div>
        <button className="back-button" onClick={()=> navigate(-1)}>&#8249; Back</button>
        <MathJax>
          <h2 style={{marginBottom:'1rem'}}>Derivative of &nbsp;{"\\(y = x^{2} \\)"} </h2>
        </MathJax>

        <iframe src="https://www.desmos.com/calculator/xkfpnfhq10?embed" width="500" height="500" 
                style={{border: "1px solid #ccc"}} >
        </iframe>
        
      </div>
  )
}

export default ParabolaDeriv