import { BrowserRouter, Routes, Route } from "react-router";
import './app.css'
import Home from "../pages/Home";
import Derivatives from "../pages/Derivatives";
import Limits from "../pages/Limits";
import Integrals from "../pages/Integrals";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/derivatives' element={ <Derivatives/> } />
        <Route path='/integrals' element= { <Integrals/> }/>
        <Route path='/limits' element= {<Limits/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
