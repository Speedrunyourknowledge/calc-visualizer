import { Link } from "react-router"

function LineInt() {

  return (
    <div>
      <Link to="/integrals">
        <button className="back-button"> Back</button>
      </Link>

      <h2 style={{ marginBottom: '1rem' }}>Linear Integral </h2>

    </div>
  )
}

export default LineInt