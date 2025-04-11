import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router";

function QuadraticDeriv(){

  const heading = useRef(null);

  useLayoutEffect(() =>{
    //@ts-ignore
    let MQ = MathQuill.getInterface(2);

    MQ.StaticMath(heading.current, { })

  }, []);

  return (
      <div>
        <Link to="/calc-visualizer">
        <button className="back-button" style={{ marginBottom: '0rem' }}> Back</button>
      </Link>
        <div>
          <h2 className="center-header" style={{marginBottom:'0.5rem'}}>Derivative of <span ref={heading}>y = x^&#123;2&#125;</span> </h2>
        </div>

        <div className="graph-outer-box">
          <iframe className = "graph-frame" src="https://www.desmos.com/calculator/wtqxy7h0yi?embed"
                  style={{border: "1px solid #ccc"}} >
          </iframe>

          <p className="big-p side-text">
            The quadratic function squares each input value, raising it to the second power
          </p>
        </div>
        
      </div>
  )
}

export default QuadraticDeriv