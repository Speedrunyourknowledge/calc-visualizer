import { Link } from "react-router"

function Home() {

  return (
      <div className="flex flex-col flex-grow items-center justify-center gap-4">
          <Link to="/derivatives">
              <div className="link-title link-box">Derivatives</div>
          </Link>
          <Link to="/integrals">
              <div className="link-title link-box">Integrals</div>
          </Link>
          <Link to="/limits">
              <div className="link-title link-box">Limits</div>
          </Link>
      </div>
  )
};

export default Home