import { useLayoutEffect, useRef } from "react";
// import LineLimGraph from "./LineLimGraph"

function LineLim() {

  const container = useRef(null);

  useLayoutEffect(() =>{
    //@ts-ignore
    let MQ = MathQuill.getInterface(2);
    MQ.StaticMath(container.current, { })

  }, []);

 return (

    <div className="flex">
      <div ref={container} className="center-header">
      \lim_&#123;x\to0&#125;\quad x
      </div>
    </div>

  )
}

export default LineLim