import { useNavigate } from "react-router";
import { useAuth } from "../../App/AuthContext";
import { Session } from "../../lib/auth-client";

function SaveFunctionButton({onSave, saving, enableSave}: {onSave: (session: Session) => void, 
  saving: boolean, enableSave: boolean})
{
    const navigate = useNavigate();
    const { session } = useAuth();

    const handleClick = () => {
        if(!session) {
            navigate("/sign-in");
            return;
        }
        onSave(session);
    }

    if(saving){
      return (
        <button className="back-button ml-[1rem]">
          <div className="animate-spin w-4 h-4 border-2 border-t-transparent border-white rounded-full"></div>
        </button>
      )
    }

    // disabled
    if(!enableSave){
      return (
        <button className="back-button ml-[1rem] disabled">Save Function</button>
      )
    }

    return (
      <button className="back-button ml-[1rem]" onClick={handleClick}>
        Save Function
      </button>
    )
}

export default SaveFunctionButton;