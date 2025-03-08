import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router";

function UnitSine() {

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
      <Link to="/unit-circle">
        <button className="back-button">Back</button>
      </Link>

      <div>
        <h2 style={{ marginBottom: '1rem' }}><span ref={heading}>sin(\theta)</span> on the Unit Circle</h2>
      </div>

      <div className="flex graph-outer-box">
        <iframe className="graph-frame unit-frame" src="https://www.desmos.com/calculator/h75kwbdxfh?embed"
          style={{ border: "1px solid #ccc" }} >
        </iframe>

        <p className="big-p">
          <span ref={container}>sin(\theta)</span> is the y&#8209;coordinate on the Unit Circle.
            This is depicted by the green line in the triangle. The sine graph on the right shows the value
            of <span ref={con2}>sin(\theta)</span> on the y&#8209;axis for each angle on the x&#8209;axis
        </p>
      </div>

    </div>
  )
}

export default UnitSine