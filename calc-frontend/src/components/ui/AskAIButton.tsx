import { useState } from "react";
import ReactMarkdown from "react-markdown";

function AskAIButton({ func, canAskAI, onAIResponseComplete }: 
  { func: string; canAskAI: boolean, onAIResponseComplete: () => void }) {
  const [open, setOpen] = useState(false);

  const handleAskAI = () => {
    try {
      
      onAIResponseComplete();
    } catch (error) {
      console.error(error);
    }
  }

  const markdownText = `
# 🤖 Ask AI
You can ask **anything** here — whether it's about _calculus_, **code**, or 🧠 brain teasers!
  
- Type your question
- Get smart answers
- Stay curious!
`;

  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="cursor-pointer relative w-16 h-16 rounded-xl p-0.5 bg-gradient-to-tr from-pink-500 via-yellow-400 to-blue-500 hover:scale-105 transition-transform"
      >
        <div className="flex flex-col items-center justify-center w-full h-full bg-gray-800 text-white rounded-xl text-xs font-medium">
          <div className="text-lg font-bold mb-1">?</div>
          Ask AI
        </div>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Modal Content */}
          <div className="relative bg-gray-800 text-white max-w-2xl w-full rounded-xl p-6 shadow-lg overflow-auto">
            <div className="flex justify-between items-center mb-4 border-b-2 border-solid">
              {canAskAI ? (
                <button onClick={handleAskAI} className="cursor-pointer">
                  <h2 className="text-xl font-semibold">{`Ask AI About: ${func}`}</h2>
                </button>
              ) : (
                <button
                  className="cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  <h2 className="text-xl font-semibold">
                    Generate a New Function to Ask Again!
                  </h2>
                </button>
              )}

              <button
                onClick={() => setOpen(false)}
                className="text-white text-xl hover:text-red-400 cursor-pointer"
              >
                &times;
              </button>
            </div>
            <ReactMarkdown>{markdownText}</ReactMarkdown>
          </div>
        </div>
      )}
    </>
  );
}

export default AskAIButton;
