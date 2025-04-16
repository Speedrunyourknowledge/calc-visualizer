import { useLayoutEffect, useRef } from "react";
import CosineDerivGraph from "./CosineDerivGraph"

function CosineDeriv() {

  const container = useRef(null);

  useLayoutEffect(() =>{
    //@ts-ignore
    let MQ = MathQuill.getInterface(2);
    MQ.StaticMath(container.current, { })

  }, []);

  return (
 

      <div className="graph-outer-box" >
        <CosineDerivGraph />
      </div>

  )
}

export default CosineDeriv