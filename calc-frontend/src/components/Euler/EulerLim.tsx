import { useLayoutEffect, useState, useRef } from "react";
import Plot from "react-plotly.js";

function EulerLim() {

  
  const [figData, setFigData] = useState<any | null>(null);
  const container = useRef(null);

  useLayoutEffect(() =>{
    //@ts-ignore
    let MQ = MathQuill.getInterface(2);
    MQ.StaticMath(container.current, { })

    fetch("/eLim.json")
    .then((res) => res.json())
    .then((json) => setFigData(json));

  }, []);

 return (
    <div>
    <div className="flex">
      <div ref={container} className="center-header">
      \lim_&#123;x\to0&#125; \quad e^&#123;x&#125;
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
          height: 500
          }}
          config={figData.config}
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </div>
    </div>

    </div>

  )
}

export default EulerLim