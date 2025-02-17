import { MathJax } from "better-react-mathjax"
import { useNavigate } from "react-router";

function CubicDeriv()
{

  const navigate = useNavigate();

  return (
      <div> 
        <button className="back-button" onClick={()=> navigate(-1)}>&#8249; Back</button>
        <MathJax>
          <h2 style={{marginBottom:'1rem'}}>Derivative of &nbsp;{"\\(y = x^{3} \\)"} </h2>
        </MathJax>

        <iframe className = "graph-frame" src="https://www.desmos.com/calculator/s8veesvrob?embed" 
                style={{border: "1px solid #ccc"}} >
        </iframe>

      </div>

  )
}

export default CubicDeriv