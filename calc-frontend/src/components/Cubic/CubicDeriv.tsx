import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router";

function CubicDeriv() {

  const heading = useRef(null);

  useLayoutEffect(() =>{
    //@ts-ignore
    let MQ = MathQuill.getInterface(2);

    MQ.StaticMath(heading.current, { })

  }, []);

  return (
    <div>
      <div>
        <h2 className="center-header" style={{marginBottom:'0.5rem'}}>Derivative of <span ref={heading}>y = x^&#123;3&#125;</span> </h2>
      </div>

      <div className="graph-outer-box">
        <iframe className="graph-frame" src="https://www.desmos.com/calculator/wzc7pioeji?embed"
          style={{ border: "1px solid #ccc" }} >
        </iframe>

        <p className="big-p side-text">
          The cubic function cubes each input value, raising it to the third power
        </p>
      </div>

    </div>

  )
}

export default CubicDeriv