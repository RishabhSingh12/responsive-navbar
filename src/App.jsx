import { useState } from 'react'
import './App.css'

function App() {
  const [toggle, setToggle] = useState(false);
  const toggleHandler =(e) => {
    setToggle(!toggle);
    // e.target.style.classList.toggle("close-menu");
  }

  return (<>
    <div className="navbar-container">
      <nav className='navbar'>
        <div className='nav-title'>User's name</div>
        <div className='option-container'>
          <p className="option-items">Home</p>
          <p className="option-items">About</p>
          <p className="option-items">Project</p>
          <p className="option-items">Contact</p>
        </div>
        <div className="option-small-container" onClick={toggleHandler}>
          <button className={`menu ${toggle ? "bar-menu" : "close-menu"}`}>
            <p></p>
            <p></p>
            <p></p>
          </button>
        </div>
      </nav>
    </div>
    {toggle && <div className="toggle-menu" style={{marginTop:"100px"}}>
      sign in
    </div>}
  </>
  )
}

export default App
