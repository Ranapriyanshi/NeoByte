import React from 'react'
import '../index.css'

const Navbar = () => {
  return (
    <div className='nav'>
        <h1 className='logo'>NeoByte</h1>
        <div className='links'>
            <ul className='list'>
                <li className="navLinks active">Home</li>
                <li className="navLinks">Project</li>
                <li className="navLinks">Services</li>
                <li className="navLinks">Contact</li>
            </ul>
        </div>
        <div>
            <button className='btn'>Login</button>
        </div>
      
    </div>
  )
}

export default Navbar
