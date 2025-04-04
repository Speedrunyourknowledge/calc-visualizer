import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router";
import IntCubicGraph from "./IntCubicGraph"

function CubicInt() {

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
      \int_&#123;-2&#125;^&#123;4&#125; x^&#123;3&#125; \quad \mathrm&#123;d&#125;x 
      </div>
    </div>

    <div className="graph-outer-box" >
      <IntCubicGraph />
    </div>

  </div>

  )
}

export default CubicInt