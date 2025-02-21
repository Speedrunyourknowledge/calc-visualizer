import { Link } from "react-router";

function CosineInt() {

  return (
    <div>
      <Link to="/integrals">
        <button className="back-button"> Back</button>
      </Link>

      <h2 style={{ marginBottom: '1rem' }}>Cosine Integral </h2>

    </div>
  )
}

export default CosineInt