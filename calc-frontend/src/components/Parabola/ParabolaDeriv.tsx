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

        <div className="flex graph-outer-box">
          <iframe className = "graph-frame" src="https://www.desmos.com/calculator/phq9sqq94c?embed" 
                  style={{border: "1px solid #ccc"}} >
          </iframe>

          <p className="big-p flex">
            The parabola function squares each input value, raising it to the second power
          </p>
        </div>
        
      </div>
  )
}

export default ParabolaDeriv