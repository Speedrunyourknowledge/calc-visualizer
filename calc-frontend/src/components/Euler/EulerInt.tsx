import { Link } from "react-router";

function EulerInt() {

  return (
    <div>
      <Link to="/integrals">
        <button className="back-button"> Back</button>
      </Link>

      <h2 style={{ marginBottom: '1rem' }}>Euler Integral </h2>

    </div>
  )
}

export default EulerInt