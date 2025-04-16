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
 

      <div className="graph-outer-box" >
        <TangentDerivGraph />
      </div>

  )
}

export default TangentDeriv