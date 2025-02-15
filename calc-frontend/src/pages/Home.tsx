import { Link } from "react-router"

function Home() {

  return (
      <div className="flex flex-col flex-grow items-center justify-center gap-6">
          <Link to="/derivatives" className = "link-box">
              <div className="link-title ">Derivatives</div>
          </Link>
          <Link to="/integrals" className = "link-box">
              <div className="link-title">Integrals</div>
          </Link>
          <Link to="/limits" className = "link-box">
              <div className="link-title">Limits</div>
          </Link>
      </div>
  )
};

export default Home