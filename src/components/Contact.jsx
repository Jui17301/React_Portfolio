import React from 'react'
import team from "../assets/team.png"
import shape from "../assets/shape.png"

const Contact = () => {
  return (
    <div>
       <section className="container mx-auto py-20 ">
      <img src={team} alt="" className="mx-auto " />
      <div
          className="relative max-w-6xl mx-auto bg-secondary flex flex-col md:flex-row justify-between gap-4 p-16 text-white items-center rounded-lg overflow-hidden">
          <h1 className="text-2xl font-bold text-center md:text-left">Do you have any question? Feel free to contact us
          </h1>
          <button className="bg-white text-secondary px-16 py-3 rounded-md font-bold z-10">Contact Us Now</button>
          <img src={shape} alt="" className="absolute left-10 md:left-1/2" />
      </div>
  </section>
    </div>
  )
}

export default Contact
