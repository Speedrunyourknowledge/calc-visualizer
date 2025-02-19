import { Link } from "react-router"

function Home() {

  return (
      <div className="flex flex-col gap-6 m-auto home-list">
          <Link to="/derivatives" className = "link-box">
              <div className="link-title">Derivatives</div>
          </Link>
          <Link to="/integrals" className = "link-box">
              <div className="link-title">Integrals</div>
          </Link>
          <Link to="/limits" className = "link-box">
              <div className="link-title">Limits</div>
          </Link>
          <Link to="/unit-circle" className = "link-box">
              <div className="link-title">Unit Circle</div>
          </Link>
      </div>
  )
};

export default Home