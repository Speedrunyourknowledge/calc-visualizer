import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router";

function TangentDeriv() {

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
        <h2 style={{ marginBottom: '0.5rem' }}>Derivative of <span ref={heading}>y = tan(x)</span> </h2>
      </div>

      <div className="flex graph-outer-box">
        <iframe className="graph-frame" src="https://www.desmos.com/calculator/4hzxwimehi?embed"
          style={{ border: "1px solid #ccc" }} >
        </iframe>

        <p className="big-p">
          The tangent function has vertical asymptotes at multiples 
          of <span ref={container}>x = \frac&#123;\pi&#125; &#123;2&#125;</span>
        </p>

      </div>

    </div>
  )
}

export default TangentDeriv