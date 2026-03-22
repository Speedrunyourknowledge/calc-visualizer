import { useLayoutEffect, useState, useRef } from "react";
import Plot from "react-plotly.js";

const figDataPromise = fetch("/natLogInt.json").then((res) => res.json());

function NatLogInt() {

  const [figData, setFigData] = useState<any | null>(null);
  const container = useRef(null);

  useLayoutEffect(() =>{
    //@ts-ignore
    let MQ = MathQuill.getInterface(2);
    MQ.StaticMath(container.current, { })

    figDataPromise.then(setFigData);
  }, []);

  return (
    <div>
      <div className="flex">
        <div ref={container} className="center-header">
        \int_&#123;.01&#125;^&#123;10&#125; \ln(x) \quad \mathrm&#123;d&#125;x
        </div>
      </div>

      <div className="graph-outer-box" >
        <div className="plotly-graph-div graph-frame">
          {figData && (
            <Plot
              data={figData.data}
              layout={{
                ...figData.layout,
                margin: { l: 60, r: 30, t: 50, b: 80 },
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

export default NatLogInt
