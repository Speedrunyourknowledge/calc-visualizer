import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router";
import IntEulerGraph from "./IntEulerGraph"

function EulerInt() {

  const container = useRef(null);

  useLayoutEffect(() =>{
    //@ts-ignore
    let MQ = MathQuill.getInterface(2);
    MQ.StaticMath(container.current, { })

  }, []);

  return (
    <div> 
      <Link to="/integrals">
        <button className="back-button">Back</button>
      </Link>
        
      <div className="flex">
        <div ref={container} className="center-header">
        \int_&#123;0&#125;^&#123;10&#125; e^&#123;x&#125; \quad \mathrm&#123;d&#125;x 
        </div>
      </div>

      <div className="graph-outer-box" >
        <IntEulerGraph />
      </div>

    </div>

  )
}

export default EulerInt