import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../App/AuthProvider";
import FunctionCard from "../components/ui/FunctionCard";
import axios from "axios";
import { Blocks } from "react-loader-spinner";
import { Link, useNavigate } from "react-router"

interface userFunction {
    equation: string;
    id: string;
    lowerBound: number;
    topic: string;
    upperBound: number;
}

function Dashboard()
{
    const [loaded, setLoaded] = useState<boolean>(false)
    // each user starts with a userFunction array of size 0
    const [userFunctions, setUserFunctions] = useState<userFunction[]>([]);

    const {session, isPending} = useContext(AuthContext);

    const navigate = useNavigate()

    const serverUrl = import.meta.env.VITE_SERVER_URL || 'http://localhost:3000'

    useEffect(() => {
      // user is not logged in
      if(!isPending && !session){
        navigate("/sign-in", { replace: true })
        return
      }

      if(session){
        getFuncs();
      }
    }, [isPending]);

    // show loading while checking if user is logged in
    if(!session){
      return  <Blocks height="80" width="80" color="#4fa94d" ariaLabel="loading" 
        wrapperStyle={{marginLeft:'auto', marginRight:'auto'}}
        wrapperClass="blocks-wrapper loading" visible={true}
        />
    }

    const getFuncs = async () => {
        const userId = session.user.id;
        try {
          const response = await axios.get(serverUrl + `/func/all/${userId}`);
          setUserFunctions(response.data);
        } catch (error) {
          console.error("get function error: ", error);
        }
        finally{
          setLoaded(true)
        }
      }

      const handleUIDelete = (id: string) => {
        setUserFunctions((prevFuncs) => prevFuncs?.filter((func) => func.id !== id) || []);
      }

    // show loading while getting user functions
    if(!loaded){
      return  <Blocks height="80" width="80" color="#4fa94d" ariaLabel="loading" 
        wrapperStyle={{marginLeft:'auto', marginRight:'auto'}}
        wrapperClass="blocks-wrapper loading" visible={true}
        />
    }

    return (
        <div>
            <h2 className="mb-5 ml-[20px]">{session.user.name}'s Dashboard</h2>

            {userFunctions.length > 0?
              <div className="dashboard">
                {
                  userFunctions.map(funct => (
                    <FunctionCard key={funct.id} topic={funct.topic} equation={funct.equation} 
                    lowerBound = {funct.lowerBound} upperBound = {funct.upperBound} id={funct.id} onDelete={handleUIDelete}/>
                  )) 
                }

              </div>
              : 
              <>
                <div className="text-xl mb-[1rem] ml-[20px]">Graph a custom function to save it here</div>

                <div className="dashboard dashboard-empty">
                  <Link to="/integrals/custom" tabIndex={-1} state={{func: 'x^2', bounds: [0, 5]}} 
                    className="topic-box custom-border">

                    <button className="link-title cursor-pointer">Custom Integral</button>
                  </Link>

                  <Link to="/derivatives/custom" tabIndex={-1} state={{func: 'x^2', bounds: [0, 5]}} 
                    className="topic-box custom-border">

                    <button className="link-title cursor-pointer">Custom Derivative</button>
                  </Link>
                </div>
              </>
            }

        </div>
    )
}

export default Dashboard;