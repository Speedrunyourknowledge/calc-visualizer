import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

interface FunctionCardProps {
  topic: string;
  equation: string;
  lowerBound: number;
  upperBound: number;
  id: string;
  onDelete: (id: string) => void;
}

function FunctionCard({
  topic,
  equation,
  lowerBound,
  upperBound,
  id,
  onDelete,
}: FunctionCardProps) {
  const navigate = useNavigate();

  const handleView = async () => {
    navigate(`/${topic}s/custom`, {
      state: { func: equation, bounds: [lowerBound, upperBound] },
    });
  };

  const handleDelete = async () => {
    const serverUrl =
      import.meta.env.VITE_SERVER_URL || "http://localhost:3000";

    try {
      await axios.delete(`${serverUrl}/func/delete/${id}`);
      onDelete(id);
    } catch (error) {
      toast.error("Something went wrong deleting the function");
      console.error(`Delete function error: ${error}`);
    }
  };

  return (
    <div className="bg-[#f6f6f7] p-4 pt-2 rounded-2xl shadow-md text-center w-[240px]">
      <p className="text-xl mb-2">
        <InlineMath>{equation}</InlineMath>
      </p>
      <img
        src={""}
        alt={topic + " graph"}
        className="w-full aspect-2/1 bg-green-300 rounded-md mb-4"
      />
      <div className="flex justify-between">
        <button
          onClick={handleView}
          className="bg-blue-500 text-[#f6f6f7] px-4 py-2 
              rounded-md cursor-pointer hover:bg-blue-700 tracking-wide font-semibold"
        >
          View
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-[#f6f6f7] px-4 py-2 
              rounded-md cursor-pointer hover:bg-red-700 tracking-wide font-semibold"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default FunctionCard;
