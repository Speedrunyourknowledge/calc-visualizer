import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router";
import IntNatLogGraph from "./IntNatLogGraph"

function NatLogInt() {

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
        \int_&#123;.01&#125;^&#123;10&#125; \ln(x) \quad \mathrm&#123;d&#125;x 
        </div>
      </div>

      <div className="graph-outer-box" style={{ display: "flex", justifyContent: "center"}}>
        <IntNatLogGraph />
      </div>

    </div>

  )
}

export default NatLogInt