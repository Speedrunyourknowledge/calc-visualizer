import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router";

function SineDeriv(){

  const heading = useRef(null);
  const container = useRef(null);

  useLayoutEffect(() =>{
    //@ts-ignore
    let MQ = MathQuill.getInterface(2);
    MQ.StaticMath(heading.current, { })
    MQ.StaticMath(container.current, { })

  }, []);

  return (
    <div> 
      <div>
        <h2 className="center-header" style={{marginBottom:'0.5rem'}}>Derivative of <span ref={heading}>y = sin(x)</span> </h2>
      </div>
      
      <div className="graph-outer-box">
        <iframe className = "graph-frame" src="https://www.desmos.com/calculator/e9waw1mka6?embed"  
                style={{border: "1px solid #ccc"}} >
        </iframe>

        <p className="big-p side-text">
          The sine function starts with a value of 0 and ends with a value of 0 on the 
          interval <span ref={container}>[0, \quad 2\pi]</span>
        </p>
      </div>
    
    </div>
  )
}

export default SineDeriv