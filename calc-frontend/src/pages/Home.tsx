import { Link } from "react-router"
import { useAuth } from "../App/AuthContext";
import SignInButton from "../components/ui/SignInButton";
import SignOutButton from "../components/ui/SignOutButton";

function Home() {
  const { session } = useAuth();


  return (
    <div>
      <h2 className = "topic-header m-auto w-fit">Topics</h2>

        <Link to="/dashboard">
          <button className="back-button">Dashboard</button>
        </Link>
        {session===null ? <SignInButton/> : <SignOutButton/> }
        {session===null ? <p>Not Signed in</p> : <p>Signed in as {session.user.name}</p>}
      <div className="flex flex-col gap-6 m-auto home-list">
        {
          /*
          <Link to="/limits" className = "link-box">
              <div className="link-title">Limits</div>
          </Link>
          */
        }
        
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
