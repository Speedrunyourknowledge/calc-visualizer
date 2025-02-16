import { Outlet, Link} from "react-router";
import { ScrollRestoration } from "react-router";

import ucfLogo from "../assets/ucf-logo.png"
import calcLogo from "../assets/calc-logo-eye-half-short.svg"

function RootLayout(){



  return(
    <>
      <ScrollRestoration/>

      <div className="header flex items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Link to ='/'>
              <h1 className="w-fit inline-block font-medium">Calc Visualizer</h1>
          </Link>

          <div className="h-[85px] w-fit inline-block">
            <Link to ='/'>
              <img className="max-h-[100%]" src={calcLogo} alt="Calc Visualizer logo"></img>
            </Link>
          </div>
        </div>

        <div className="h-[75px] w-fit self-start">
            <a href="https://www.ucf.edu/" target="_blank">
            <img className="rounded-sm max-h-[100%]" src={ucfLogo} alt="UCF logo"></img>
            </a>  
        </div>
      
      </div>

      <Outlet />
    </>
  )
}

export default RootLayout