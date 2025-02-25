import { MathJax } from "better-react-mathjax"
import { Link } from "react-router";

function SineDeriv()
{

  return (
    <div> 
      <Link to="/derivatives">
        <button className="back-button"> Back</button>
      </Link>
      <MathJax>
        <h2 style={{marginBottom:'1rem'}}>Derivative of &nbsp;{"\\(y = \\sin(x)\\)"} </h2>
      </MathJax>
      
      <div className="flex graph-outer-box">
        <iframe className = "graph-frame" src="https://www.desmos.com/calculator/e9waw1mka6?embed"  
                style={{border: "1px solid #ccc"}} >
        </iframe>

        <p className="big-p">
          <MathJax>The sine function starts with a value of 0 and ends with a value of 0 on the 
            interval [0, 2{"\\(π\\)"}]</MathJax>
        </p>
      </div>
    
    </div>
  )
}

export default SineDeriv