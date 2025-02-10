import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router";

import './app.css'

import Home from "../pages/Home";
import Derivatives from "../pages/Derivatives";
import Limits from "../pages/Limits";
import Integrals from "../pages/Integrals";

import ParabolaDerivative from "../components/ParabolaDerivative";
import ParabolaIntegral from "../components/ParabolaIntegral";
import ParabolaLimit from "../components/ParabolaLimit";
import RootLayout from "./RootLayout";

function App() {

    // go to the RootLayout component to edit the visual layout

    // handles all the routes
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>
          <Route index element={<Home/>} />

          <Route path='/derivatives' element={ <Derivatives/> }/>
          <Route path='/derivatives/parabola' element={ <ParabolaDerivative/> } />

          <Route path='/integrals' element= { <Integrals/> }/>
          <Route path='/integrals/parabola' element={ <ParabolaIntegral/> }/>

          <Route path='/limits' element= {<Limits/>}/>
          <Route path='/limits/parabola' element={ <ParabolaLimit/> } />
          
        </Route>
      )
    );

  return (
    <RouterProvider router={router} />
  )
}

export default App
