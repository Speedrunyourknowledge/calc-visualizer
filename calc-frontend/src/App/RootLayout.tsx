import { Outlet, Link } from "react-router";
import { ScrollRestoration } from "react-router";

import ucfLogo from "../assets/ucf-logo.png"
import CalcLogo from "../components/CalcLogo"

import { authClient } from "../lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { useEffect } from "react";
import axios from "axios";

function RootLayout() {

  const serverUrl = import.meta.env.VITE_SERVER_URL || 'http://localhost:3000'

  const session = authClient.useSession();


  const requestSession = async () => {

    try{
      const response = await axios.get(serverUrl + '/api/session')

      console.log(response)
    }
    catch(e){
      console.error("session error: ", e)
    }
  }

  useEffect(() => {

    requestSession()

  }, [])


  return (
    <>
      <ScrollRestoration />

      <div className="header flex items-center justify-between gap-4">

        <div className="flex items-center gap-2">
          <Link to='/'>
            <h1 className="w-fit font-medium">Calc Visualizer</h1>
          </Link>

          <div className="w-fit h-[75px]">
            <Link to='/'>
              <CalcLogo />
            </Link>
          </div>

        </div>
        {session.data?.session ? (
          session.data?.user.image ? (
            <Link to="/dashboard">
              <Avatar className="mr-5 cursor-pointer w-12 h-12">
                <AvatarImage src={session.data?.user.image} />
                <AvatarFallback>{session.data?.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </Link>
          ) : (
            <a href="https://www.ucf.edu/" target="_blank" className="h-[75px] shrink-0 self-start">
              <img className="rounded-sm h-[100%] object-contain" src={ucfLogo} alt="UCF logo"></img>
            </a>
          )
        ) : (
          <a href="https://www.ucf.edu/" target="_blank" className="h-[75px] shrink-0 self-start">
            <img className="rounded-sm h-[100%] object-contain" src={ucfLogo} alt="UCF logo"></img>
          </a>
        )}

      </div>

      <Outlet />
    </>
  )
}

export default RootLayout