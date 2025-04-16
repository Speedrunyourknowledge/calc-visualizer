import { useLayoutEffect, useRef } from "react";
import EulerDerivGraph from "./EulerDerivGraph"

function EulerDeriv() {

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
      \frac&#123;d&#125;&#123;dx&#125;(e^x)
      </div>
      </div>

      <div className="graph-outer-box" >
        <EulerDerivGraph />
      </div>
    </div>

  )
}

export default EulerDeriv