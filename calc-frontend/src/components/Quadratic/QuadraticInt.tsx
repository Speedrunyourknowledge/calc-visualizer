import { useLayoutEffect, useRef } from "react";
import IntQuadraticGraph from "./IntQuadraticGraph"

function QuadraticInt() {

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
        \int_&#123;-5&#125;^&#123;5&#125; x^&#123;2&#125; \quad \mathrm&#123;d&#125;x 
        </div>
      </div>

      <div className="graph-outer-box" >
        <IntQuadraticGraph />
      </div>

    </div>

  )
}

export default QuadraticInt