import { useNavigate } from "react-router"

function LineInt(){

  const navigate = useNavigate();

  return (
    <div> 
      <button className="back-button" onClick={()=> navigate(-1)}>&#8249; Back</button>
      <h2 style={{marginBottom:'1rem'}}>Linear Integral </h2>

    </div>
  )
}

export default LineInt