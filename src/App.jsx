import React from 'react'
import "./pages/_App.scss"

function App() {
  return (
    <div className="container">
      <div className="nav-container">
        <nav>
          <ul>
            <li> Home </li>
            <li> About us </li>
            <li> Contact us </li>
          </ul>
          <img src="/react-logo.png" alt="logo" />
          <button> Sign up </button>
        </nav>
      </div>
      <div className="hero-container">
        <div className="hero-inner">
          <h1> There is a lot of <span>features</span> in our website and lots of <span>choices</span> to make your dream website. </h1>
          <img src="/hero-img.png" alt="image" />
        </div>
      </div>
    </div>
  )
}

export default App