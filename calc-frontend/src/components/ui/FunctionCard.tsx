import axios from "axios";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import integralDashboard from "../../assets/integralDashboard.gif";
import limitDashboard from "../../assets/limitDashboard.png";
import derivativeDashboard from "../../assets/tangentDashboard.png";
import { useLayoutEffect, useRef } from "react";

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

  const container = useRef(null);
  const dxContainer = useRef(null);
  let images = new Map<string, string>();
  images.set("Integral", integralDashboard);
  images.set("Limit", limitDashboard);
  images.set("Derivative", derivativeDashboard);


  const navigate = useNavigate();

  useLayoutEffect(() => {
    //@ts-ignore Cannot find MathQuill
    const MQ = MathQuill.getInterface(2); // Get MathQuill interface

    if (container.current) {
      let latex = "";

      // Set LaTeX content based on the topic
      if (topic === "Integral") {
        latex = `\\int_{${lowerBound}}^{${upperBound}}`;
      } else if (topic === "Derivative") {
        latex = `\\frac{d}{dx}`;
      } else if (topic === "Limit") {
        latex = `\\lim_{x \\to ${lowerBound}}`;
      }

      // Render the LaTeX content using MathQuill
      MQ.StaticMath(container.current).latex(latex);
    }
    if(topic === "Integral" && dxContainer.current) {
      MQ.StaticMath(dxContainer.current).latex("\\mathrm{d}x")
    }
  }, [topic, lowerBound, upperBound]);

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
      <div ref={container}></div>
        <InlineMath
          math={"(" + equation + ")"}
          renderError={() => <span>{equation}</span>}
        />
        <div ref={dxContainer}></div>
      </p>
      <img
        src={images.get(topic)}
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
