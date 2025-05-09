import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, TooltipArrow } from "@radix-ui/react-tooltip";
import { Session } from "../../lib/auth-client";
import { AuthContext } from "../../App/AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router";

function SaveFunctionButton({onSave, saving, enableSave}: {onSave: (session: Session) => void, 
  saving: boolean, enableSave: boolean})
{
  const {session} = useContext(AuthContext);

  const navigate = useNavigate()

    const handleClick = () => {
      if(!session) {
        navigate("/sign-in");
        return;
    }
        onSave(session);
    }

    if(saving){
      return (
        <button className="save-button">
          <div className="animate-spin w-[1.125rem] h-[1.125rem] border-3 border-t-transparent border-white rounded-full"></div>
        </button>
      )
    }

    // disabled
    if(!enableSave){
      return (
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="save-button disabled">Save Function</button>
            </TooltipTrigger>

            <TooltipContent className="tooltip-content">
              Graph a new function first
              <TooltipArrow className="tooltip-arrow"/>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
    }

    return (
      <button className="save-button" onClick={handleClick}>
        Save Function
      </button>
    )
}

export default SaveFunctionButton;