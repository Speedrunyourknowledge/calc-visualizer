import { useNavigate } from "react-router";

function SineInt()
{
  const navigate = useNavigate();

  return (
    <div> 
      <button className="back-button" onClick={()=> navigate(-1)}>&#8249; Back</button>
      <h2 style={{marginBottom:'1rem'}}>Sine Integral </h2>

    </div>
  )
}

export default SineInt