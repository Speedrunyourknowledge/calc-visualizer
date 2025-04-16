import { Route } from "react-router";

import RootLayout from "./RootLayout";

import Home from "../pages/Home";

import QuadraticLim from "../components/Quadratic/QuadraticLim";
import QuadraticDeriv from "../components/Quadratic/QuadraticDeriv";
import QuadraticInt from "../components/Quadratic/QuadraticInt";

import CubicLim from "../components/Cubic/CubicLim";
import CubicDeriv from "../components/Cubic/CubicDeriv";
import CubicInt from "../components/Cubic/CubicInt";

import CosineLim from "../components/Cosine/CosineLim";
import CosineDeriv from "../components/Cosine/CosineDeriv";
import CosineInt from "../components/Cosine/CosineInt";

import SineLim from "../components/Sine/SineLim";
import SineDeriv from "../components/Sine/SineDeriv";
import SineInt from "../components/Sine/SineInt";

import TangentLim from "../components/Tangent/TangentLim";
import TangentDeriv from "../components/Tangent/TangentDeriv";
import TangentInt from "../components/Tangent/TangentInt";

import NatLogLim from "../components/NatLog/NatLogLim";
import NatLogDeriv from "../components/NatLog/NatLogDeriv";
import NatLogInt from "../components/NatLog/NatLogInt";

import LineLim from "../components/Line/LineLim";
import LineDeriv from "../components/Line/LineDeriv";
import LineInt from "../components/Line/LineInt";

import EulerLim from "../components/Euler/EulerLim";
import EulerDeriv from "../components/Euler/EulerDeriv";
import EulerInt from "../components/Euler/EulerInt";

import ErrorPage from "../pages/ErrorPage";

//import CustomLim from "../pages/CustomLimit";
import CustomInt from "../pages/CustomIntegral";
import CustomDeriv from "../pages/CustomDerivative";

import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";
import RedirectIfAuth from "../components/RedirectIfAuth";

const RoutesList =
  <Route path='/' element={<RootLayout />} >
    <Route index element={<Home />} />
    <Route path='/calc-visualizer' element={<Home />} />

    <Route element={<RedirectIfAuth />} >
      <Route path='/sign-in' element={<SignIn />} />
    </Route>

    <Route path='/dashboard' element={<Dashboard />} />

    {/*<Route path='/limits/custom' element={<CustomLim />} /> */}
    <Route path='/limits/quadratic' element={<QuadraticLim />} />
    <Route path='/limits/cubic' element={<CubicLim />} />
    <Route path='/limits/logarithmic' element={<NatLogLim />} />
    <Route path='/limits/exponential' element={<EulerLim />} />
    <Route path='/limits/linear' element={<LineLim />} />
    <Route path='/limits/sine' element={<SineLim />} />
    <Route path='/limits/cosine' element={<CosineLim />} />
    <Route path='/limits/tangent' element={<TangentLim />} />

    <Route path='/derivatives/custom' element={<CustomDeriv />} />
    <Route path='/derivatives/quadratic' element={<QuadraticDeriv />} />
    <Route path='/derivatives/cubic' element={<CubicDeriv />} />
    <Route path='/derivatives/logarithmic' element={<NatLogDeriv />} />
    <Route path='/derivatives/exponential' element={<EulerDeriv />} />
    <Route path='/derivatives/linear' element={<LineDeriv />} />
    <Route path='/derivatives/sine' element={<SineDeriv />} />
    <Route path='/derivatives/cosine' element={<CosineDeriv />} />
    <Route path='/derivatives/tangent' element={<TangentDeriv />} />

    <Route path='/integrals/custom' element={<CustomInt />} />
    <Route path='/integrals/quadratic' element={<QuadraticInt />} />
    <Route path='/integrals/cubic' element={<CubicInt />} />
    <Route path='/integrals/logarithmic' element={<NatLogInt />} />
    <Route path='/integrals/exponential' element={<EulerInt />} />
    <Route path='/integrals/linear' element={<LineInt />} />
    <Route path='/integrals/sine' element={<SineInt />} />
    <Route path='/integrals/cosine' element={<CosineInt />} />
    <Route path='/integrals/tangent' element={<TangentInt />} />
    

    <Route path='*' element={<ErrorPage />} />

  </Route>

export default RoutesList