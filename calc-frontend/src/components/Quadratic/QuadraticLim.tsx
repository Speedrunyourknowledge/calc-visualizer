import { useLayoutEffect, useRef } from "react";
// import QuadraticLimGraph from "./QuadraticLimGraph"

function QuadraticLim() {

  const container = useRef(null);

  useLayoutEffect(() =>{
    //@ts-ignore
    let MQ = MathQuill.getInterface(2);
    MQ.StaticMath(container.current, { })

  }, []);

 return (

    <div className="flex">
      <div ref={container} className="center-header">
      \lim_&#123;x\to0&#125; \quad x^&#123;2&#125;
      </div>
    </div>

  )
}

export default QuadraticLim