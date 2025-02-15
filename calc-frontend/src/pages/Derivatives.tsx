import { useNavigate } from "react-router"

// will show list of derivative options to choose from
function Derivatives(){

  const navigate = useNavigate();

    return (
        <div>
          <button className="back-button" onClick={()=> navigate(-1)}>&#8249; Back</button>
          <h2 style={{marginBottom:'1rem' }}>The Derivative of Common Functions</h2>

          <div className="flex flex-col flex-grow justify-center gap-6">
            <button className="topic-button" onClick={()=> navigate("/derivatives/linear")}>Linear</button>
            
            <button className="topic-button" onClick={()=> navigate("/derivatives/parabola")}>Parabola</button>

            <button className="topic-button" onClick={()=> navigate("/derivatives/cubic")}>Cubic</button>

            <button className="topic-button" onClick={()=> navigate("/derivatives/euler")}>Euler</button>

            <button className="topic-button" onClick={()=> navigate("/derivatives/natural-log")}>Natural Log</button>

            <button className="topic-button" onClick={()=> navigate("/derivatives/sine")}>Sine</button>

            <button className="topic-button" onClick={()=> navigate("/derivatives/cosine")}>Cosine</button>

            <button className="topic-button" onClick={()=> navigate("/derivatives/tangent")}>Tangent</button>
          </div>
        </div>
    )
}

export default Derivatives