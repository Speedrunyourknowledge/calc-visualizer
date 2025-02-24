import { Link } from "react-router"

function Home() {

  return (
    <div>
      <h2 className = "topic-header m-auto w-fit">Topics</h2>

      <div className="flex flex-col gap-6 m-auto home-list">

          <Link to="/limits" className = "link-box">
              <div className="link-title">Limits</div>
          </Link>
        
          <Link to="/derivatives" className = "link-box">
              <div className="link-title">Derivatives</div>
          </Link>
          
          <Link to="/integrals" className = "link-box">
              <div className="link-title">Integrals</div>
          </Link>

          <Link to="/unit-circle" className = "link-box">
              <div className="link-title">Unit Circle</div>
          </Link>
          
          <h3 className = "topic-header m-auto w-fit">More topics coming soon...</h3>
      </div>
      
    </div>
  )
};

export default Home
