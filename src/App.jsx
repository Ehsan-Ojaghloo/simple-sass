import React from 'react'
import "./pages/_App.scss"

function App() {
  return (
    <div className="container yellow-theme">
      <div className="nav-container">
        <nav>
          <ul>
            <li className='yellow-theme'> Home </li>
            <li className='yellow-theme'> About us </li>
            <li className='yellow-theme'> Contact us </li>
          </ul>
          <img src="/react-logo.png" alt="logo" />
          <button className='yellow-theme'> Sign up </button>
        </nav>
      </div>
      <div className="hero-container">
        <div className="hero-inner">
          <div>
            <h1> There is a lot of <span className='yellow-theme'>features</span> in our website and lots of <span className='yellow-theme'>choices</span> to make your <span className='yellow-theme'>dream</span> website. </h1>
            <button className='more-btn yellow-theme'> More... </button>
          </div>
          <img src="/hero-img.svg" alt="image" />
        </div>
      </div>
    </div>
  )
}

export default App