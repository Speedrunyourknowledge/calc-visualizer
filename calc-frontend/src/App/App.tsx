import { createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router";
import { MathJaxContext } from "better-react-mathjax";

import './app.css'

import RoutesList from "./RoutesList";


function App() {

    // go to the RootLayout component to edit the visual layout

    // Handles all the routes
    // The calc-visualizer path is for github pages
    const router = createBrowserRouter(
      createRoutesFromElements(
        RoutesList
      )
    );

  return (
    <MathJaxContext>
      <RouterProvider router={router} />
    </MathJaxContext>
  )
}

export default App
