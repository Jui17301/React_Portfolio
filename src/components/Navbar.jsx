import React from 'react'
import logo from "../assets/codeabc_circle.png";
import search from "../assets/search.png"
import login from "../assets/lock.png"


const Navbar = () => {
  return (
    <>
      <nav className="container 
      mx-auto flex flex-col md:flex-row gap-4 items-center py-2">
    <img  className="w-[80px] h-[80px]" src={logo} alt=""/>
    <div className="w-full flex flex-col md:flex-row gap-4 justify-between items-center">
      <div className="flex flex-col md:flex-row gap-6  items-center ">
        <p>Home</p>
        <p>Channel</p>
        <p>Support</p>
        <p>About</p>
        <img src={search} alt="search"/>
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex gap-2 items-center">
        <img src={login} alt="" />
        <span>Login</span>
        </div>
        <div>
          <button className="bg-primary px-8 py-3 rounded-md text-white">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  </nav>
    </>
  )
}

export default Navbar
