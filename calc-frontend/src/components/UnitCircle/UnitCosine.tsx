import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router";

function UnitCosine() {

  const heading = useRef(null);
  const container = useRef(null);
  const con2 = useRef(null);

  useLayoutEffect(() =>{
    //@ts-ignore
    let MQ = MathQuill.getInterface(2);
    MQ.StaticMath(heading.current, { })
    MQ.StaticMath(container.current, { })
    MQ.StaticMath(con2.current, { })

  }, []);

  return (
    <div>
      <Link to="/unit-circle" tabIndex={-1}>
        <button className="back-button">Back</button>
      </Link>

      <div>
        <h2 className="center-header" style={{marginBottom:'0.5rem'}}><span ref={heading}>cos(\theta)</span> on the Unit Circle</h2>
      </div>

      <div className="graph-outer-box">
        <iframe className="graph-frame unit-frame" src="https://www.desmos.com/calculator/a5jvnnetfk?embed"
          style={{ border: "1px solid #ccc" }} >
        </iframe>

        <p className="big-p side-text">
          <span ref={container}>cos(\theta)</span> is the x&#8209;coordinate on the Unit Circle.
            This is depicted by the green line in the triangle. The cosine graph on the right shows the value
            of <span ref={con2}>cos(\theta)</span> on the y&#8209;axis
          
        </p>
      </div>

    </div>
  )
}

export default UnitCosine