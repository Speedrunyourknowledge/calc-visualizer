import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router";

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
        <Link to="/derivatives">
          <button className="back-button"> Back</button>
        </Link> 
        <p className="big-p">
            The derivative of a linear function <span ref={heading}>y = mx</span> is equivalent to the slope of the line - <span ref={container}>\frac&#123;\Delta \text&#123;&#8202;&#125; y&#125; 
            &#123;\Delta \text&#123;&#8202;&#125; x&#125;</span>
        </p>        
        <div className="flex graph-outer-box">
          <iframe className = "graph-frame" src="https://www.desmos.com/calculator/6tdy3yors3?embed" 
                  style={{border: "1px solid #ccc"}} >
          </iframe>

          

        </div>
        
      </div>
  )
}

export default LineDeriv