import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router";

function EulerDeriv()
{

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
      <Link to="/derivatives">
        <button className="back-button" style={{marginBottom:'0rem'}}> Back</button>
      </Link>
      <div>
        <h2 className="center-header" style={{marginBottom:'0.5rem'}}>Derivative of <span ref={heading}>y = e^&#123;x&#125;</span></h2>
      </div>

      <div className="graph-outer-box">
        <iframe className = "graph-frame" src="https://www.desmos.com/calculator/apkv8zj85n?embed"
                style={{border: "1px solid #ccc"}} >
        </iframe>

        <p className="big-p side-text">
          The exponential function grows the fastest. It has a horizontal asymptote 
          at <span ref={container}>y = 0</span>. 
          The <span ref={con2}>e</span> in <span ref={con3}>e^&#123;x&#125;</span> is 
          called Euler's number, and it is equal to 2.718... (the digits go on forever)
        </p>
      </div>
    
    </div>
  )
}

export default EulerDeriv