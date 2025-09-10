import React from 'react'
import miniPekka from '../assets/mini_pekka_fl.3c7f31a8.webp'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='w-full h-[200px] flex justify-between bg-blue-300'>
      <div className='flex flex-col gap-3    w-1/2 align-baseline items-center justify-center'>
        <h1 className='text-2xl font-extrabold'>Interested working with us</h1>
        <Link to="/signin">
        <button className='bg-black text-white font-bold p-5 w-full rounded-2xl text-xl cursor-pointer hover:opacity-80'> See all positions</button>
        </Link>
      </div>
      <div className='relative w-1/2    flex '>
            
            <img src={miniPekka} alt="mini" className='absolute bottom-0 h-[250px] right-1/3' />
      </div>
    </div>
  )
}

export default Contact
