import { useLayoutEffect, useRef } from "react";
import SineDerivGraph from "./SineDerivGraph"

function SineDeriv() {

  const container = useRef(null);

  useLayoutEffect(() =>{
    //@ts-ignore
    let MQ = MathQuill.getInterface(2);
    MQ.StaticMath(container.current, { })

  }, []);

  return (
 

      <div className="graph-outer-box" >
        <SineDerivGraph />
      </div>

  )
}

export default SineDeriv