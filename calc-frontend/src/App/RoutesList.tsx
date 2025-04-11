import { Route } from "react-router";

import RootLayout from "./RootLayout";

import Home from "../pages/Home";
import Limits from "../pages/Limits";

import QuadraticDeriv from "../components/Quadratic/QuadraticDeriv";
import QuadraticInt from "../components/Quadratic/QuadraticInt";

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

import LimitDef from "../components/Limits/LimitDef";

import CustomInt from "../pages/CustomIntegral";
import CustomDeriv from "../pages/CustomDerivative";


const RoutesList = 
<Route path='/' element={<RootLayout/>} >
  <Route index element={<Home/>}/>
  <Route path='/calc-visualizer' element={<Home/>} />


  <Route path='/derivatives/custom' element={ <CustomDeriv/> } />
  <Route path='/derivatives/quadratic' element={ <QuadraticDeriv/> } />
  <Route path='/derivatives/cubic' element={ <CubicDeriv/> } />
  <Route path='/derivatives/logarithmic' element={ <NatLogDeriv/> } />
  <Route path='/derivatives/exponential' element={ <EulerDeriv/> } />
  <Route path='/derivatives/linear' element={ <LineDeriv/> } />
  <Route path='/derivatives/sine' element={ <SineDeriv/> } />
  <Route path='/derivatives/cosine' element={ <CosineDeriv/> } />
  <Route path='/derivatives/tangent' element={ <TangentDeriv/> } />

  <Route path='/integrals/custom' element={ <CustomInt/> } />
  <Route path='/integrals/quadratic' element={ <QuadraticInt/> }/>
  <Route path='/integrals/cubic' element={ <CubicInt/> }/>
  <Route path='/integrals/logarithmic' element={ <NatLogInt/> } />
  <Route path='/integrals/exponential' element={ <EulerInt/> } />
  <Route path='/integrals/linear' element={ <LineInt/> } />
  <Route path='/integrals/sine' element={ <SineInt/> } />
  <Route path='/integrals/cosine' element={ <CosineInt/> } />
  <Route path='/integrals/tangent' element={ <TangentInt/> } />

  <Route path='/limits' element= {<Limits/>}/>
  <Route path='/limits/limitdef' element={ <LimitDef/> } />

  <Route path='*' element={<ErrorPage/>} />
  
</Route>

export default RoutesList