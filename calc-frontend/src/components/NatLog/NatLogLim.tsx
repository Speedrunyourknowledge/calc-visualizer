import { useLayoutEffect, useRef } from "react";
// import NatLogLimGraph from "./NatLogLimGraph"

function NatLogLim() {

  const container = useRef(null);

  useLayoutEffect(() =>{
    //@ts-ignore
    let MQ = MathQuill.getInterface(2);
    MQ.StaticMath(container.current, { })

  }, []);

 return (

    <div className="flex">
      <div ref={container} className="center-header">
      \lim_&#123;x\to0&#125;\ln(x)
      </div>
    </div>

  )
}

export default NatLogLim