import React from 'react'
import "./Header.css"
import logo from "../assets/supercell_logo.50e3c1ff.webp"
import { Link } from 'react-router-dom'

const Header = () => {
  
  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-3/4 my-5 ">
      <nav className='w-full px-2 flex justify-between items-center bg-black text-white font-bold text-2xl h-[100px] rounded-xl'>
        <div className='px-3 h-full p-6 px-12'>
          <img src={logo} alt="" className='h-full hover:text-amber-200 scale-125'/>
        </div>
        <div className='flex justify-around gap-12 px-7'>
          <div className='hover:text-amber-200  duration-300 cursor-pointer roboto-slab uppercase'>home</div>
          <div className='hover:text-amber-200  duration-300 cursor-pointer roboto-slab uppercase'>
            <Link to="/about">about</Link></div>
          <div className='hover:text-amber-200  duration-300 cursor-pointer roboto-slab uppercase'><Link to="/signin">connect</Link></div>
        </div>
      </nav>
    </header>
  )
}

export default Header


