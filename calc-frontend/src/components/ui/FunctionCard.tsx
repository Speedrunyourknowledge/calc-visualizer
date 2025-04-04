import axios from "axios";

interface FunctionCardProps {
    topic: string;
    expression: string;
    id: string;
    onDelete: (id: string) => void;
}

const handleView = async () => {console.log("View")}

function FunctionCard({topic, expression, id, onDelete}: FunctionCardProps) {
    const handleDelete = async () => {
        
        try {
            const response = await axios.delete(`http://localhost:3000/api/func/delete/${id}`);
            onDelete(id);
        } catch (error) {
            alert(`Something went wrong: ${error}`)
        }
    }

    return (
    <div className="bg-white p-4 rounded-2xl shadow-md text-center w-80">
        <h2 className="text-xl font-semibold mb-2">{topic}</h2>
        <p className="text-lg text-gray-700 mb-4">{expression}</p>
        <img src={""} alt="Graph" className="w-full h-40 object-cover rounded-md mb-4" />
        <div className="flex justify-between">
            <button onClick={handleView} className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-700">
                View
                </button>
            <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-700">
                Delete
            </button>
        </div>
    </div>
    )
}

export default FunctionCard;