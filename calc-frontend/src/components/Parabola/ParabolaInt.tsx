import { Link } from "react-router";

function ParabolaInt()
{
  
  return (
    <div> 
      <Link to="/integrals">
        <button className="back-button"> Back</button>
      </Link>

      <h2 style={{marginBottom:'1rem'}}>Parabola Integral </h2>

    </div>
  )
}

export default ParabolaInt