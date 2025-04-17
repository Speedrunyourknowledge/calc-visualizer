import { useLayoutEffect, useRef } from "react";
import NatLogDerivGraph from "./NatLogDerivGraph"

function NatLogDeriv() {

  const container = useRef(null);

  useLayoutEffect(() =>{
    //@ts-ignore
    let MQ = MathQuill.getInterface(2);
    MQ.StaticMath(container.current, { })

  }, []);

  return (

      
 
<div>
     <div className="flex">
      <div ref={container} className="center-header">
      \frac&#123;d&#125;&#123;dx&#125;(\ln(x))
      </div>
      </div>

      <div className="graph-outer-box" >
        <NatLogDerivGraph />
      </div>
    </div>

  )
}

export default NatLogDeriv