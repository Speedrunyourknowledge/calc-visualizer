import { useLayoutEffect, useRef } from "react";
import LineDerivGraph from "./LineDerivGraph"

function LineDeriv() {

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
      \frac&#123;d&#125;&#123;dx&#125;(x)
      </div>
      </div>

      <div className="graph-outer-box" >
        <LineDerivGraph />
      </div>
    </div>

  )
}

export default LineDeriv