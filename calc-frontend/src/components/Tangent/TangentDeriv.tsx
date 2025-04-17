import { useLayoutEffect, useRef } from "react";
import TangentDerivGraph from "./TangentDerivGraph"

function TangentDeriv() {

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
      \frac&#123;d&#125;&#123;dx&#125;(\tan(x))
      </div>
      </div>

      <div className="graph-outer-box" >
        <TangentDerivGraph />
      </div>
    </div>

  )
}

export default TangentDeriv