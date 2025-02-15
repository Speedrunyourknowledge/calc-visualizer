import { useNavigate } from "react-router"

// will show list of integral options to choose from
function Integrals(){

  const navigate = useNavigate();

    return (
        <div>
          <button className="back-button" onClick={()=> navigate(-1)}>&#8249; Back</button>
          <h2 style={{marginBottom:'1rem'}}>Integrals</h2>
          
          <div className="flex flex-col flex-grow justify-center gap-6">
          <button className="topic-button" onClick={()=> navigate("/integrals/linear")}>Linear</button>

            <button className="topic-button" onClick={()=> navigate("/integrals/parabola")}>Parabola</button>

            <button className="topic-button" onClick={()=> navigate("/integrals/cubic")}>Cubic</button>

            <button className="topic-button" onClick={()=> navigate("/integrals/euler")}>Euler</button>

            <button className="topic-button" onClick={()=> navigate("/integrals/natural-log")}>Natural Log</button>

            <button className="topic-button" onClick={()=> navigate("/integrals/sine")}>Sine</button>

            <button className="topic-button" onClick={()=> navigate("/integrals/cosine")}>Cosine</button>

            <button className="topic-button" onClick={()=> navigate("/integrals/tangent")}>Tangent</button>
          </div>
        </div>
    )
}

export default Integrals