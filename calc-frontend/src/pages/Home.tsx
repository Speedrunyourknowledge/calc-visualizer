import { Link } from "react-router"
import ucfLogo from "../assets/ucf-logo.png"

function Home() {

    return (
        <>
            <a href="https://www.ucf.edu/" target="_blank">
            <img className="rounded-lg" src={ucfLogo} alt="UCF"></img>
            </a>
            <div className="h-screen flex flex-col flex-grow items-center justify-center gap-4">
            <h1 className="text-4xl mb-8 font-bold">Calc Visualizer</h1>
                <Link to="/derivatives">
                    <div className="w-300 h-30 flex items-center justify-center bg-gray-500 rounded-lg hover:bg-gray-600 transition transform hover:scale-103 transition-transform duration-200">Derivatives</div>
                </Link>
                <Link to="/integrals">
                    <div className="w-300 h-30 flex items-center justify-center bg-gray-500 rounded-lg hover:bg-gray-600 transition transform hover:scale-103 transition-transform duration-200">Integrals</div>
                </Link>
                <Link to="/limits">
                    <div className="w-300 h-30 flex items-center justify-center bg-gray-500 rounded-lg hover:bg-gray-600 transition transform hover:scale-103 transition-transform duration-200">Limits</div>
                </Link>
            </div>
        </>
    )
};

export default Home