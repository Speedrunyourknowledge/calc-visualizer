import { useNavigate } from "react-router";

function ParabolaInt()
{
  const navigate = useNavigate();

  return (
    <div> 
      <button className="back-button" onClick={()=> navigate(-1)}>&#8249; Back</button>
      <h2 style={{marginBottom:'1rem'}}>Parabola Integral </h2>

    </div>
  )
}

export default ParabolaInt