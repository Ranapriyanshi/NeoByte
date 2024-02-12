import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../index.css'

const Navbar = () => {
  const navigate = useNavigate();
  const handlehome = () => {  
    navigate("/");
  }
  const handlelogin = () => {  
    navigate("/login");
  }
  return (
    <div className='nav'>
      
      <h1 className='logo' onClick={handlehome}><img src={logo} alt="" />NeoByte</h1>
      <div className='links'>
          <ul className='list'>
              <li className="navLinks active">Home</li>
              <li className="navLinks">Project</li>
              <li className="navLinks">Services</li>
              <li className="navLinks">Contact</li>
          </ul>
      </div>
      <div>
          <button className='btn' onClick={handlelogin}>Login</button>
      </div>
      
    </div>
  )
}

export default Navbar
