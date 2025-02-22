import { Link } from "react-router";

function CubicInt() {


  return (
    <div>
      <Link to="/integrals">
        <button className="back-button"> Back</button>
      </Link>

      <h2 style={{ marginBottom: '1rem' }}>Cubic Integral </h2>

    </div>
  )
}

export default CubicInt