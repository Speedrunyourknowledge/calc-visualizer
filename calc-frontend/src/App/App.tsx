import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router";
import { MathJaxContext } from "better-react-mathjax";

import './app.css'

import RootLayout from "./RootLayout";

import Home from "../pages/Home";
import Derivatives from "../pages/Derivatives";
import Limits from "../pages/Limits";
import Integrals from "../pages/Integrals";

import ParabolaDeriv from "../components/Parabola/ParabolaDeriv";
import ParabolaInt from "../components/Parabola/ParabolaInt";
import ParabolaLimit from "../components/Parabola/ParabolaLimit";

import CubicDeriv from "../components/Cubic/CubicDeriv";
import CubicInt from "../components/Cubic/CubicInt";

import CosineDeriv from "../components/Cosine/CosineDeriv";
import CosineInt from "../components/Cosine/CosineInt";

import SineDeriv from "../components/Sine/SineDeriv";
import SineInt from "../components/Sine/SineInt";

import TangentDeriv from "../components/Tangent/TangentDeriv";
import TangentInt from "../components/Tangent/TangentInt";

import NatLogDeriv from "../components/NatLog/NatLogDeriv";
import NatLogInt from "../components/NatLog/NatLogInt";

import LineDeriv from "../components/Line/LineDeriv";
import LineInt from "../components/Line/LineInt";

import EulerDeriv from "../components/Euler/EulerDeriv";
import EulerInt from "../components/Euler/EulerInt";
import ErrorPage from "../pages/ErrorPage";

import UnitCircle from "../pages/UnitCircle";
import UnitSine from "../components/UnitCircle/UnitSine";
import UnitCosine from "../components/UnitCircle/UnitCosine";
import UnitTangent from "../components/UnitCircle/UnitTangent";


function App() {

    // go to the RootLayout component to edit the visual layout

    // Handles all the routes
    // The calc-visualizer path is for github pages
    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<RootLayout/>} >
          <Route index element={<Home/>}/>
          <Route path='/calc-visualizer' element={<Home/>} />

          <Route path='/derivatives' element={ <Derivatives/> }/>
          <Route path='/derivatives/parabola' element={ <ParabolaDeriv/> } />
          <Route path='/derivatives/cubic' element={ <CubicDeriv/> } />
          <Route path='/derivatives/logarithmic' element={ <NatLogDeriv/> } />
          <Route path='/derivatives/exponential' element={ <EulerDeriv/> } />
          <Route path='/derivatives/linear' element={ <LineDeriv/> } />
          <Route path='/derivatives/sine' element={ <SineDeriv/> } />
          <Route path='/derivatives/cosine' element={ <CosineDeriv/> } />
          <Route path='/derivatives/tangent' element={ <TangentDeriv/> } />

          <Route path='/integrals' element= { <Integrals/> }/>
          <Route path='/integrals/parabola' element={ <ParabolaInt/> }/>
          <Route path='/integrals/cubic' element={ <CubicInt/> }/>
          <Route path='/integrals/logarithmic' element={ <NatLogInt/> } />
          <Route path='/integrals/exponential' element={ <EulerInt/> } />
          <Route path='/integrals/linear' element={ <LineInt/> } />
          <Route path='/integrals/sine' element={ <SineInt/> } />
          <Route path='/integrals/cosine' element={ <CosineInt/> } />
          <Route path='/integrals/tangent' element={ <TangentInt/> } />

          <Route path='/limits' element= {<Limits/>}/>
          <Route path='/limits/parabola' element={ <ParabolaLimit/> } />

          <Route path='/unit-circle' element= {<UnitCircle/>}/>
          <Route path='/unit-circle/sine' element={ <UnitSine/> } />
          <Route path='/unit-circle/cosine' element={ <UnitCosine/> } />
          <Route path='/unit-circle/tangent' element={ <UnitTangent/> } />

          <Route path='*' element={<ErrorPage/>} />
          
        </Route>
      )
    );

  return (
    <MathJaxContext>
      <RouterProvider router={router} />
    </MathJaxContext>
  )
}

export default App
