import { Link } from "react-router";

function SineInt() {

  return (
    <div>
      <Link to="/integrals">
        <button className="back-button"> Back</button>
      </Link>

      <h2 style={{ marginBottom: '1rem' }}>Sine Integral </h2>

    </div>
  )
}

export default SineInt