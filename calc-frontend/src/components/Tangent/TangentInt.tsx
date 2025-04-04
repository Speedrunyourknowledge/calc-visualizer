import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router";
import IntTangentGraph from "./IntTangentGraph"

function TangentInt() {

  const container = useRef(null);

  useLayoutEffect(() =>{
    //@ts-ignore
    let MQ = MathQuill.getInterface(2);
    MQ.StaticMath(container.current, { })

  }, []);

  return (
    <div> 
      <Link to="/integrals" tabIndex={-1}>
        <button className="back-button">Back</button>
      </Link>
          
      <div className="flex">
        <div ref={container} className="center-header">
        \int_&#123;0&#125;^&#123;1.5&#125; \tan(x) \quad \mathrm&#123;d&#125;x 
        </div>
      </div>

      <div className="graph-outer-box" >
        <IntTangentGraph />
      </div>

    </div>
  )
}

export default TangentInt