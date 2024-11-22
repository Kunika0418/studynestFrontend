import React from 'react'
import logo from '../../assets/logo/logo.jpg'
import { IoMdPerson } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='p-0'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light h-20 flex justify-between items-center px-4">
        <div className="navbar-name flex h-10">
          <div className="navbar-logo w-16 h-16 justify-center items-center">
            <img src={logo} alt="Logo" />
          </div>
          <a className="navbar-brand my-2" href="/">StudyNest</a>
        </div>
        <ul className="flex justify-center gap-4">
          <li><a href="/Property">Property</a></li>
          <li><a href="/Services">Services</a></li>
          <li className='text-2xl'>
            <button>
              <IoMdPerson />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar