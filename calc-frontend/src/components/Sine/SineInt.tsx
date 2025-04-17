import { useLayoutEffect, useRef } from "react";
import IntSineGraph from "./IntSineGraph"

function SineInt() {

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
        \int_&#123;0&#125;^&#123;5&#125; \sin(x) \quad \mathrm&#123;d&#125;x 
        </div>
      </div>

      <div className="graph-outer-box" >
        <IntSineGraph />
      </div>

    </div>

  )
}

export default SineInt