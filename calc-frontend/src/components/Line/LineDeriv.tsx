import { useLayoutEffect, useRef } from "react";
import LineDerivGraph from "./LineDerivGraph"

function LineDeriv() {

  const container = useRef(null);

  useLayoutEffect(() =>{
    //@ts-ignore
    let MQ = MathQuill.getInterface(2);
    MQ.StaticMath(container.current, { })

  }, []);

  return (
 

      <div className="graph-outer-box" >
        <LineDerivGraph />
      </div>

  )
}

export default LineDeriv