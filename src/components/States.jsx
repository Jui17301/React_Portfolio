import React from 'react'
import state from '../assets/states.png'

const States = () => {
  return (
    <div>
      <section className="">
  <div className="max-w-5xl mx-auto">
    <div className="max-w-5xl mx-auto text-center py-20">
      <h1 className="pb-6 text-3xl font-bold">Those states we provide donation</h1>
      <p className="pb-10">We are organizing a program on January 20, 2019 to help the homeless people. Our aim is to
          provide them a specific place to live.</p>
      <img src={state} alt="" />
  </div>
  </div>
</section>
    </div>
  )
}

export default States
