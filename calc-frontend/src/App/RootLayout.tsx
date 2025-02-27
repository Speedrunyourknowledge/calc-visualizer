import { Outlet, Link} from "react-router";
import { ScrollRestoration } from "react-router";

import ucfLogo from "../assets/ucf-logo.png"
import CalcLogo from "../components/CalcLogo"

function RootLayout(){


  return(
    <>
      <ScrollRestoration/>

      <div className="header flex items-center justify-between gap-4">

        <div className="flex items-center gap-2">
          <Link to ='/'>
              <h1 className="w-fit font-medium">Calc Visualizer</h1>
          </Link>

          <div className="w-fit h-[85px]">
            <Link to ='/'>
              <CalcLogo />
            </Link>
          </div>
          
        </div>

          <a href="https://www.ucf.edu/" target="_blank" className="h-[75px] shrink-0 self-start">
            <img className="rounded-sm h-[100%] object-contain" src={ucfLogo} alt="UCF logo"></img>
          </a>  
      
      </div>

      <Outlet />
    </>
  )
}

export default RootLayout
