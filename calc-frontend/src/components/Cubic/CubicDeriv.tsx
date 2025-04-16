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
 

      <div className="graph-outer-box" >
        <CubicDerivGraph />
      </div>

  )
}

export default CubicDeriv