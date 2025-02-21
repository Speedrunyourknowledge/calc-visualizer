import { Link } from "react-router";

function NatLogInt()
{

  return (
    <div> 
      <Link to="/integrals">
        <button className="back-button"> Back</button>
      </Link>
      
      <h2 style={{marginBottom:'1rem'}}>Natural Log Integral </h2>

    </div>
  )
}

export default NatLogInt