import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">Start Bootstrap</a>                
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                      <a className="nav-link active text-white" href="#">Home</a>
                      <a className="nav-link text-white" href="#">About</a>
                      <a className="nav-link text-white" href="#">Services</a>
                      <a className="nav-link text-white" href="#">Contact</a>
                  </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar