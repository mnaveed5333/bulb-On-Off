import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      
      <h1 className="text-xl font-bold text-cyan-400">
        MyApp
      </h1>

      <div className="space-x-6">
        <Link 
          to="/Home" 
          className="hover:text-cyan-400 transition duration-300"
        >
          Home
        </Link>

        <Link 
          to="/about" 
          className="hover:text-cyan-400 transition duration-300"
        >
          About
        </Link>

        <Link 
          to="/contact" 
          className="hover:text-cyan-400 transition duration-300"
        >
          Contact
        </Link>
      </div>

    </nav>
  )
}

export default Navbar