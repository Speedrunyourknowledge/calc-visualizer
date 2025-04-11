import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

function AskAIButtonDerivative({
  func,
  lowerBound,
  upperBound,
  canAskAI,
  onAIResponseComplete,
}: {
  func: string;
  lowerBound: number;
  upperBound: number;
  canAskAI: boolean;
  onAIResponseComplete: () => void;
}) 
{
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [markdownText, setMarkdownText] = useState(
    `### 🤖 Ask AI\n### Graph your function, then click above for an explanation!`
  );

  const handleAskAI = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:3000/gemini/ask-derivative",
        {
          func,
          lowerBound,
          upperBound,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setMarkdownText(response.data.message);
      onAIResponseComplete();

    } catch (error) {
      setMarkdownText(`### ❌ An error occured, please try again`);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // the user has created a new graph
  useEffect(() => {
    setMarkdownText(`### 🤖 Ask AI\n### Click above for an explanation!`);
  },[])

  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="cursor-pointer relative w-15 h-15 rounded-xl p-0.5 bg-gradient-to-tr from-pink-500 via-yellow-400 to-blue-500 hover:scale-105 transition-transform"
      >
        <div className="flex flex-col items-center justify-center w-full h-full bg-gray-800 text-white rounded-xl text-xs font-medium">
          <div className="text-lg font-bold">?</div>
          Ask AI
        </div>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Modal Content */}
          <div className="relative bg-gray-800 text-white max-w-2xl max-h-[80vh] w-full rounded-xl p-4 pt-2
            shadow-lg overflow-y-auto mr-[20px] ml-[20px]">
            <div className="flex justify-between items-center mb-2 border-b-2 border-solid gap-2">
              {canAskAI ? (
                <button onClick={handleAskAI} className="cursor-pointer pb-1">
                  <h3 className="font-semibold">{`Ask AI About: ${func}`}</h3>
                </button>
              ) : (
                <button
                  className="cursor-pointer pb-1"
                  onClick={() => setOpen(false)}
                >
                  <h3 className="font-medium">
                    Generate a New Function to Ask a Question
                  </h3>
                </button>
              )}

              <button
                onClick={() => setOpen(false)}
                className="text-white text-4xl hover:text-red-400 cursor-pointer pb-1"
              >
                &times;
              </button>
            </div>

            <div className="relative">
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-10">
                  <div className="loader animate-spin w-10 h-10 border-4 border-t-transparent border-white rounded-full"></div>
                </div>
              )}
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {markdownText}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AskAIButtonDerivative;
