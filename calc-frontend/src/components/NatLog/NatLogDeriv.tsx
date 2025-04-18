import { useLayoutEffect, useState, useRef } from "react";
import Plot from "react-plotly.js";

function NatLogDeriv() {

  const [figData, setFigData] = useState<any | null>(null);
  const container = useRef(null);

  useLayoutEffect(() =>{
    //@ts-ignore
    let MQ = MathQuill.getInterface(2);
    MQ.StaticMath(container.current, { })

    fetch("/lnDeriv.json")
    .then((res) => res.json())
    .then((json) => setFigData(json));

  }, []);
  return (
 
 <div>
     <div className="flex">
      <div ref={container} className="center-header">
      \frac&#123;d&#125;&#123;dx&#125;(\ln(x))
      </div>
      </div>

  <div className="flex justify-center">
    <div className="plotly-graph-div graph-frame">
      {figData && (
        <Plot
          data={figData.data}
          layout={{
          ...figData.layout,
          margin: { l: 40, r: 40, t: 40, b: 40 },
          }}
          frames={figData.frames}
          config={figData.config}
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </div>
    </div>
    </div>
  )
}

export default NatLogDeriv