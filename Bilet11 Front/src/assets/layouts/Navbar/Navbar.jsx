import React from 'react'
import "./navbar.scss"
import { Link, NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar_container">
            <div className="logo"><img src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/loder.jpg.webp" alt="" /></div>
            <div className="links">
                <ul>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/add"}>Add page</NavLink>
                    <NavLink  to={"/Service"}>Service</NavLink>
                    <NavLink to={"/Blog"}>Blog</NavLink>
                    <NavLink to={"/Contact"}>Contact</NavLink>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar