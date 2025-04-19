import { createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router";

import '../../mathquill/build/mathquill.css'
import './app.css'
import './widgets.css'

import RoutesList from "./RoutesList";

import { Toaster } from "@/components/ui/sonner";
import AuthProvider from "./AuthProvider";

function App() {

  // go to the RootLayout component to edit the visual layout

  // Handles all the routes
  // The calc-visualizer path is for github pages
  const router = createBrowserRouter(
    createRoutesFromElements(RoutesList)
  );

  return (
    <AuthProvider>
      <Toaster position="bottom-left" richColors />
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
