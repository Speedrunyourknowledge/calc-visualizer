import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router";

import '../../node_modules/mathquill/build/mathquill.css'
import './app.css'
import './widgets.css'

import RoutesList from "./RoutesList";
import { AuthProvider } from "./AuthContext";

//@ts-ignore implicit any type
import mathquillFunc from "../../node_modules/mathquill/build/mathquill";


function App() {

  // launch mathquill instance
  mathquillFunc();

  // go to the RootLayout component to edit the visual layout

  // Handles all the routes
  // The calc-visualizer path is for github pages
  const router = createBrowserRouter(
    createRoutesFromElements(RoutesList));

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
