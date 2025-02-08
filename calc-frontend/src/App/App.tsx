import { BrowserRouter, Routes, Route } from "react-router";
import './app.css'
import Home from "../pages/Home";
import Derivatives from "../pages/Derivatives";
import Limits from "../pages/Limits";
import Integrals from "../pages/Integrals";

import ParabolaDerivative from "../components/parabolaDerivative";
import ParabolaIntegral from "../components/parabolaIntegral";
import ParabolaLimit from "../components/parabolaLimit";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/derivatives' element={ <Derivatives/> } />
        <Route path='/derivatives/parabola' element={ <ParabolaDerivative/> } />

        <Route path='/integrals' element= { <Integrals/> }/>
        <Route path='integrals/parabola' element={ <ParabolaIntegral/> }/>

        <Route path='/limits' element= {<Limits/>} />
        <Route path='limits/parabola' element={ <ParabolaLimit/> } />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
