import { Link } from "react-router"
import { useAuth } from "../App/AuthContext";
import SignInButton from "../components/ui/SignInButton";
import SignOutButton from "../components/ui/SignOutButton";

function Home() {
  const { session, isPending } = useAuth();


  return (
    <div>
      <Link to="/dashboard" tabIndex={-1} style={{marginRight:'20px'}}>
        <button className="back-button">Dashboard</button>
      </Link>
      {isPending === true? 
        null
        : 
        !session ? <SignInButton/> : <SignOutButton/> }

      <h2 className = "topic-header m-auto w-fit">Topics</h2>

      <div className="flex flex-col m-auto home-list">
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
