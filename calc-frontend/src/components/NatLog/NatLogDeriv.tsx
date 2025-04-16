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
 

      <div className="graph-outer-box" >
        <NatLogDerivGraph />
      </div>

  )
}

export default NatLogDeriv