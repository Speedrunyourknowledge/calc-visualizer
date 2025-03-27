import { useEffect, useState } from "react";
import { useAuth } from "../App/AuthContext";
import FunctionCard from "../components/ui/FunctionCard";
import axios from "axios";

interface userFunction {
    equation: string;
    id: string;
    lowerBound: number;
    topic: string;
    upperBound: number;
}

function Dashboard()
{
    const { session } = useAuth();
    if(!session) {
        throw new Error("Not authorized");
    }

    const [userFunctions, setUserFunctions] = useState<userFunction[] | null>(null);

    const getFuncs = async () => {
        const userId = session.user.id;
        try {
          const response = await axios.get(`http://localhost:3000/api/func/all/${userId}`);
          setUserFunctions(response.data);
        } catch (error) {
          console.log("SOMETing wrong:", error);
        }
      }

      useEffect(() => {
        getFuncs();
      }, []);

      const handleUIDelete = (id: string) => {
        setUserFunctions((prevFuncs) => prevFuncs?.filter((func) => func.id !== id) || null);
        console.log("Function successfully deleted!");
      }

    return (
        <div>
            <h1 className="mb-5">{session.user.name}'s Dashboard</h1>

            <div className="flex flex-wrap justify-center items-center content-center gap-10">

            {userFunctions ? 
            userFunctions.map(funct => (
                <FunctionCard key={funct.id} topic={funct.topic} expression={funct.equation} id={funct.id} onDelete={handleUIDelete}/>
            )) : <div>No functions!</div> }

            </div>
        </div>
    )
}

export default Dashboard;