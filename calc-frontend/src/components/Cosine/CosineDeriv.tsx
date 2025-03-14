import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router";

function CosineDeriv() {

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
      <Link to="/derivatives">
        <button className="back-button"> Back</button>
      </Link>
      <div>
        <h2 style={{ marginBottom: '0.5rem' }}>Derivative of <span ref={heading}>y = cos(x)</span></h2>
      </div>

      <div className="flex graph-outer-box">
        <iframe className="graph-frame" src="https://www.desmos.com/calculator/t9zizgbgrv?embed"
          style={{ border: "1px solid #ccc" }} >
        </iframe>

        <p className="big-p">
          The cosine function starts with a value of 1 and ends with a value of 1 on the 
          interval <span ref={container}>[0, \quad 2\pi]</span>
        </p>

      </div>

    </div>
  )
}

export default CosineDeriv