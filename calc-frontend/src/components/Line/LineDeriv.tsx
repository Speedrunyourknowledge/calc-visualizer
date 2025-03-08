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
        <div>
          <h2 style={{marginBottom:'0.5rem'}}>Derivative of <span ref={heading}>y = x</span> </h2>
        </div>
        
        <div className="flex graph-outer-box">
          <iframe className = "graph-frame" src="https://www.desmos.com/calculator/dojf9xhzey?embed" 
                  style={{border: "1px solid #ccc"}} >
          </iframe>

          <p className="big-p">
            The linear function has a constant slope equal 
            to <span ref={container}>\frac&#123;\Delta \text&#123;&#8202;&#125; y&#125; 
            &#123;\Delta \text&#123;&#8202;&#125; x&#125;</span>
          </p>

        </div>
        
      </div>
  )
}

export default LineDeriv