import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router"

function QuadraticLimit() {

  const heading = useRef(null);

  useLayoutEffect(() =>{
    //@ts-ignore
    let MQ = MathQuill.getInterface(2);

    MQ.StaticMath(heading.current, { })

  }, []);

  return (
    <div> 
      <Link to="/limits" tabIndex={-1}>
        <button className="back-button">Back</button>
      </Link>

      <div>
        <h2 className="center-header" style={{marginBottom:'0.5rem'}}>Limit of <span ref={heading}>y = x^&#123;2&#125;</span> </h2>
      </div>

      <div className="graph-outer-box">
      </div>

    </div>
  )
}

export default QuadraticLimit