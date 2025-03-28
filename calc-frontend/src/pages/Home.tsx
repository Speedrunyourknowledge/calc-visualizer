import { Link } from "react-router"

function Home() {

  return (
    <div>
      <h2 className = "topic-header m-auto w-fit">Topics</h2>

      <div className="topic-list topic-list-3" style={{marginBottom:'1rem'}}>
        {
          /*
          <Link to="/limits" className = "link-box">
              <div className="link-title">Limits</div>
          </Link>
          */
        }
        
          <Link to="/derivatives" className = "topic-box">
              <button className="link-title cursor-pointer">Derivatives</button>
          </Link>
          
          <Link to="/integrals" className = "topic-box">
              <button className="link-title cursor-pointer">Integrals</button>
          </Link>

          <Link to="/unit-circle" className = "topic-box">
              <button className="link-title cursor-pointer">Unit Circle</button>
          </Link>
          
      </div>

      <h3 className = "topic-header m-auto w-fit">More topics coming soon...</h3>
      
    </div>
  )
};

export default Home
