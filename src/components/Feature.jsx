import React from 'react'
import heroImage from '../assets/hero_bg_clashofclans_.fae7c799.webp';
import mainImage from '../assets/main_logo_clashofclans.eccf135a.webp'

const Feature = () => {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
  {/* Background image - fills the container */}
  <img
    src={heroImage}
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Foreground image - positioned on top */}
  <img
    src={mainImage}
    alt="Main character"
    className="absolute top-28 left-7 h-1/4 z-10"
  />
</div>
  )
}

export default Feature
