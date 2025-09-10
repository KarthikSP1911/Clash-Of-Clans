import React from 'react'
import mobile from '../assets/bg_intro_clashofclans.134fece1 (1).webp'

const F2 = () => {
  return (
    <div className="py-10 bg-black">
    <div className='w-full   relative flex  text-white bg-black justify-around text-2xl '>
        <div className='w-1/2 h-3/4 '>
        <img src={mobile} alt="mobile" className='absolute -left-1/6  h-full bg-blend-multiply opacity-80' />
        </div>
        <div className='w-1/2 p-4  my-12  relative right-2 flex flex-col'>
            <h1 className='font-bold text-4xl text-amber-200'>LEAD YOUR CLAN TO VICTORY!</h1>
            <p className='text leading-relaxed'>Answer the call of the mustache! Join the international fray that is Clash of Clans and the Clash® universe. Customize your village, build an army and crush your opponents. Like using friendship to strike fear into your enemies? Join a Clan, or establish a Clashing legacy by creating your own. The choice is yours in this millions-strong community of Barbarians. Download for free and Clash on, Chief!</p>
    
        </div>
    </div>
    </div>
  )
}

export default F2
