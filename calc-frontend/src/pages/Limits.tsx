import { useNavigate } from "react-router"

// will show list of limit options to choose from
function Limits() {

  const navigate = useNavigate();

    return (
        <div>
            <button className="back-button" onClick={()=> navigate(-1)}>&#8249; Back</button>
            <h2 style={{marginBottom:'1rem' }}>Limits</h2>

            <div className="flex flex-col flex-grow justify-center gap-6">
              <button className="topic-button" onClick={()=> navigate("/limits/parabola")}>Parabola</button>

            </div>
        </div>

    )
}

export default Limits