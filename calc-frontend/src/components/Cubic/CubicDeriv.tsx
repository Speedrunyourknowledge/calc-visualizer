import { useLayoutEffect, useRef } from "react";
import CubicDerivGraph from "./CubicDerivGraph"

function CubicDeriv() {

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
      \frac&#123;d&#125;&#123;dx&#125;(x^3)
      </div>
      </div>

      <div className="graph-outer-box" >
        <CubicDerivGraph />
      </div>
    </div>

  )
}

export default CubicDeriv