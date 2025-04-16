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
 

      <div className="graph-outer-box" >
        <EulerDerivGraph />
      </div>

  )
}

export default EulerDeriv