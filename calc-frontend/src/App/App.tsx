import { useState } from 'react'

import './app.css'
import ucfLogo from '../assets/ucf-logo.png'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <div>
        <a href="https://www.ucf.edu/" target="_blank">
          <img src={ucfLogo} className="logo" alt="UCF logo" />
        </a>

      </div>
      <h1 className='text-green-500'>Calc Visualizer</h1>
      <div className="card">
        <button className = "text-red-500 border-2 border-solid cursor-pointer transform hover:scale-110 transition-transform duration-200" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
