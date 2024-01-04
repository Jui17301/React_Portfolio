import React from 'react'
import play from '../assets/play.png'
import picture from '../assets/jui.jpg';

const Hero = () => {
  return (
    <div>
      <section className="flex gap-6 justify-between items-center mx-auto container px-16 py-20 flex-col md:flex-row">
  <div>
      <h1 className="text-5xl font-bold pb-6"><span className="text-primary">Tailwind CSS </span> 
           Course</h1>
      <h2 className="text-2xl font-bold text-secondary pb-6 md:text-5xl">Sumaiya Siddiqa Jui</h2>
      <p className="font-bold">Founder,Suju_lifestyle</p>
    
    <div className="flex gap-6 items-center pt-8">
      <button className="bg-secondary px-8 py-3 rounded-md text-white font-bold">GET TOKEN</button>
     <div className="flex gap-2 items-center">
      <span>WHITE PAPER</span>
      <img src={play} alt=""/>
     </div>
    </div>
  </div>
  <div>
    <img src={picture} alt="" className="h-50 w-50 bg-gray-400 rounded-full"/>
  </div>
</section>
    </div>
  )
}

export default Hero
