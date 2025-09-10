import React from 'react'

const Footer = () => {
  return (
   <footer className="w-full bg-black py-6">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm text-gray-600 font-bold text-3xl">
      <div className=' hover:text-white'>Terms & Conditions</div>
      <div className=' hover:text-white'>Contact Us</div>
      <div className=' hover:text-white'>Privacy Policy</div>
      <div className=' hover:text-white'>Rewards</div>
    </div>
  </div>
</footer>

  )
}

export default Footer
