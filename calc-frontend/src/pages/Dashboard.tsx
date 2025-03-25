import FunctionCard from "../components/ui/FunctionCard";

function Dashboard()
{
    return (
        <div>
            <h1 className="">Dashboard</h1>

            <div className="flex flex-wrap justify-center items-center content-center gap-10">
            <FunctionCard topic="Derivative" expression="x^2" id="1" />
            <FunctionCard topic="Derivative" expression="x^2" id="2" />
            <FunctionCard topic="Derivative" expression="x^2" id="3"/>
            <FunctionCard topic="Derivative" expression="x^2" id="4"/>
            <FunctionCard topic="Derivative" expression="x^2" id="5"/>

            </div>
        </div>
    )
}

export default Dashboard;