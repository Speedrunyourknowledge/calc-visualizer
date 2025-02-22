import { Link } from "react-router";

function TangentInt()
{

  return (
    <div> 
      <Link to="/integrals">
        <button className="back-button"> Back</button>
      </Link>

      <h2 style={{marginBottom:'1rem'}}>Tangent Integral </h2>

    </div>
  )
}

export default TangentInt