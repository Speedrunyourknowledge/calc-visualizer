import { Outlet, Link} from "react-router";
import { ScrollRestoration } from "react-router";

import ucfLogo from "../assets/ucf-logo.png"

function RootLayout(){



  return(
    <>
      <ScrollRestoration/>

      <div className="header flex items-center gap-4">
        <div className="logo-container h-[75px] w-fit inline-block">
            <a href="https://www.ucf.edu/" target="_blank">
            <img className="rounded-sm max-h-[100%]" src={ucfLogo} alt="UCF"></img>
            </a>  
        </div>

        <Link to ='/'>
            <h1 className="w-fit inline-block font-medium">Calc Visualizer</h1>
        </Link>
      
      </div>

      <Outlet />
    </>
  )
}

export default RootLayout