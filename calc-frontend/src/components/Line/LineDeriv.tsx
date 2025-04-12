import { useLayoutEffect, useRef } from "react";

function LineDeriv()
{

  const heading = useRef(null);
  const container = useRef(null);
  const con2 = useRef(null);
  const con3 = useRef(null);

  useLayoutEffect(() =>{
    //@ts-ignore
    let MQ = MathQuill.getInterface(2);

    MQ.StaticMath(heading.current, { })
    MQ.StaticMath(container.current, { })
    MQ.StaticMath(con2.current, { })
    MQ.StaticMath(con3.current, { })

  }, []);

  return (
    
      <div>
        <div>
          <h2 className="center-header">Derivative of <span ref={heading}>y = \frac&#123;1&#125;&#123;2&#125; \quad x</span> </h2>
        </div>
        <div className="graph-outer-box">
          <iframe className = "graph-frame" src="https://www.desmos.com/calculator/irrldubehb?embed" 
                  style={{border: "1px solid #ccc"}} >
          </iframe>

          <p className="big-p side-text">
            The derivative of a linear function is equal to its slope: <span ref={container}>\frac&#123;\Delta \text&#123;&#8202;&#125; y&#125; 
            &#123;\Delta \text&#123;&#8202;&#125; x&#125;</span>
          </p>    

        </div>
        
      </div>
  )
}

export default LineDeriv