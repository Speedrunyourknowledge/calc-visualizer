import { useNavigate } from "react-router";
import { useAuth } from "../../App/AuthContext";
import { Session } from "../../lib/auth-client";

function SaveFunctionButton({onSave}: {onSave: (session: Session) => void})
{
    const navigate = useNavigate();
    const { session } = useAuth();

    const handleClick = () => {
        if(session === null) {
            navigate("/sign-in");
            return;
        }
        onSave(session);
    }

    return (
        <button className="back-button" onClick={handleClick}>Save Function!</button>
    )
}

export default SaveFunctionButton;