import { useLayoutEffect, useRef } from "react";
import QuadraticDerivGraph from "./QuadraticDerivGraph"

function QuadraticDeriv() {

  const container = useRef(null);

  useLayoutEffect(() =>{
    //@ts-ignore
    let MQ = MathQuill.getInterface(2);
    MQ.StaticMath(container.current, { })

  }, []);

  return (
 

      <div className="graph-outer-box" >
        <QuadraticDerivGraph />
      </div>

  )
}

export default QuadraticDeriv