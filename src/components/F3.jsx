import React, {useRef} from 'react'
import f3 from "/f3.jpg"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const F3 = () => {
    const img_ref = useRef(null);
     useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        pin: true,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        markers: false,
      },
    });

    // Animate image
    tl.fromTo(
      img_ref.current,
      { width: "200px", height: "400px", borderTopLeftRadius: "99px", borderTopRightRadius: "99px" },
      { width: "100vw", height: "100vh", borderTopLeftRadius: "0px", borderTopRightRadius: "0px" }
    );


})
  return (
    <div className='relative w-full h-[100vh] bg-blue-300 border-2 flex items-center  justify-center' id='clip'>
        <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center z-0">
    <p className="text-2xl text-black font-bold">ENTER INTO THE REALM OF</p>
    <p className='text-6xl text-yellow-300 font-extrabold'>CLASH OF CLANS</p>
  </div>
      <div ref={img_ref} className='absolute w-[100px] h-[200px] m-auto  border-2 overflow-hidden z-5'>
            <img  src={f3} className='object-cover w-full h-full' alt="" />
      </div>
    </div>
  )
}

export default F3
