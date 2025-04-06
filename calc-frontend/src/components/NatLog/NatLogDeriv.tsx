import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router";

function NatLogDeriv(){

  const heading = useRef(null);
  const container = useRef(null);
  const con2 = useRef(null);
  const con3 = useRef(null);

  useLayoutEffect(() =>{
    //@ts-ignore
    let MQ = MathQuill.getInterface(2);

    MQ.StaticMath(heading.current, { })
    MQ.StaticMath(container.current, { })
    MQ.StaticMath(con2.current, { })
    MQ.StaticMath(con3.current, { })

  }, []);

  return (
    <div> 
      <Link to="/calc-visualizer">
        <button className="back-button"> Back</button>
      </Link>
      <div>
        <h2 className="center-header" style={{marginBottom:'0.5rem'}}>Derivative of <span ref={heading}>y = ln(x)</span> </h2>
      </div>
      
      <div className="graph-outer-box">
        <iframe className = "graph-frame" src="https://www.desmos.com/calculator/2oftga01j8?embed"
                style={{border: "1px solid #ccc"}} >
        </iframe>

        <p className="big-p side-text">
          The logarithmic function grows the slowest. It has a vertical asymptote 
            at <span ref={container}>x = 0</span>. Logarithms are the inverse of exponents, 
            so <span ref={con2}>y = ln(x)</span> is the same 
            as <span ref={con3}>y = e^&#123;x&#125;</span> rotated 180 degrees.
        </p>
      </div>
    
    </div>

      
  )
}

export default NatLogDeriv