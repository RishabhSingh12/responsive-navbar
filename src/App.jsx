import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="navbar-container">
      <nav className='navbar'>
        <div className='nav-title'>User's name</div>
        <div className='option-container'>
          <p className="option-items">Home</p>
          <p className="option-items">About</p>
          <p className="option-items">Project</p>
          <p className="option-items">Contact</p>
        </div>
        <div className="option-small-container">
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
    </div>
  )
}

export default App
