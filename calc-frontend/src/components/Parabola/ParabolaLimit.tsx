import { useNavigate } from "react-router"

function ParabolaLimit() {

  const navigate = useNavigate();

  return (
    <div> 
      <button className="back-button" onClick={()=> navigate(-1)}>&#8249; Back</button>
      <h2 style={{marginBottom:'1rem'}}>Parabola Limit</h2>

    </div>
  )
}

export default ParabolaLimit