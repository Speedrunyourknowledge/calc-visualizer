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
        <div className="topic-list topic-list-3" style={{marginBottom:'1rem'}}>
          {
            /*
            <Link to="/limits" className = "link-box">
                <div className="link-title">Limits</div>
            </Link>
            */
          }
          
            <Link to="/derivatives" tabIndex={-1} className = "topic-box">
                <button className="link-title cursor-pointer">Derivatives</button>
            </Link>
            
            <Link to="/integrals" tabIndex={-1} className = "topic-box">
                <button className="link-title cursor-pointer">Integrals</button>
            </Link>

            <Link to="/unit-circle" tabIndex={-1} className = "topic-box">
                <button className="link-title cursor-pointer">Unit Circle</button>
            </Link>
            
        </div>

        <h3 className = "topic-header m-auto w-fit">More topics coming soon...</h3>
        
      </div>
    </div>
  )
};

export default Home
