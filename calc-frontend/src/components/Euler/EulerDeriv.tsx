import { MathJax } from "better-react-mathjax"
import { useNavigate } from "react-router";

function EulerDeriv()
{

  const navigate = useNavigate();

  return (
    <div>
      <button className="back-button" onClick={()=> navigate(-1)}>&#8249; Back</button>
      <MathJax>
        <h2 style={{marginBottom:'1rem'}}>Derivative of &nbsp;{"\\(y = e^{x} \\)"} </h2>
      </MathJax>

      <div className="flex gap-4 graph-outer-box">
        <iframe className = "graph-frame" src="https://www.desmos.com/calculator/5fb4idx020?embed" 
                style={{border: "1px solid #ccc"}} >
        </iframe>

        <p className="big-p flex">
          <MathJax>The exponential function grows the fastest. It naturally has a horizontal asymptote 
            at {"\\(y = 0\\)"}. <br/> The {"\\(e\\)"} in {"\\(e^{x} \\)"} is called Euler's number, and 
            it is equal to 2.718... (the digits go on forever)</MathJax>
        </p>
      </div>
    
    </div>
  )
}

export default EulerDeriv