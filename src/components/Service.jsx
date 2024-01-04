import React from 'react'

const Service = () => {
  return (
    <div>
      <section className="bg-[#EEF5FF] p-20">
     <div className="text-center pb-10">
      <p className="text-primary font-bold text-2xl">Service we work for</p>
      <h1 className="pb-10 font-bold">What care we do for your career</h1>
      <img src="../src/assets/down.png" alt="" className="mx-auto"/>
     </div> 
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 bg-white p-20 gap-y-8">
      <div className="text-center flex flex-col gap-4 border-none border-gray-400 shadow-lg rounded-lg">
        <img src="../src//assets/career1.png" alt=""  className="mx-auto"/>
        <h1>Coding</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo in repudiandae adipisci nisi commodi quo veritatis ea alias nam magni.</p>
        <button className="text-primary font-bold">Learn More <span className="">></span></button>
      </div>
      <div className="text-center flex flex-col gap-4  border-none border-gray-400 shadow-lg rounded-lg">
        <img src="../src//assets/career2.png" alt="" className="mx-auto"/>
        <h1>Communication</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo in repudiandae adipisci nisi commodi quo veritatis ea alias nam magni.</p>
        <button className="text-primary font-bold">Learn More <span className="">></span></button>
      </div>
      <div className="text-center flex flex-col gap-4  border-none border-gray-400 shadow-lg rounded-lg">
        <img src="../src//assets/career3.png" alt=""  className="mx-auto"/>
        <h1>Growth</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo in repudiandae adipisci nisi commodi quo veritatis ea alias nam magni.</p>
        <button className="text-primary font-bold">Learn More <span className="">></span></button>
      </div>
      <div className="text-center flex flex-col gap-4  border-none border-gray-400 shadow-lg rounded-lg">
        <img src="../src//assets/career4.png" alt=""  className="mx-auto"/>
        <h1>Brain Storming</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo in repudiandae adipisci nisi commodi quo veritatis ea alias nam magni.</p>
        <button className="text-primary font-bold">Learn More <span className="">></span></button>
      </div>
      <div className="text-center flex flex-col gap-4  border-none border-gray-400 shadow-lg rounded-lg">
        <img src="../src//assets/career5.png" alt=""  className="mx-auto"/>
        <h1>Collaboration</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo in repudiandae adipisci nisi commodi quo veritatis ea alias nam magni.</p>
        <button className="text-primary font-bold">Learn More <span className="">></span></button>
      </div>
      <div className="text-center flex flex-col gap-4  border-none border-gray-400 shadow-lg rounded-lg">
        <img src="../src//assets/career6.png" alt=""  className="mx-auto"/>
        <h1>Help for educational</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo in repudiandae adipisci nisi commodi quo veritatis ea alias nam magni.</p>
        <button className="text-primary font-bold">Learn More <span className="">></span></button>
      </div>
     
      
      </div>


      <div className="max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto my-6">
        <div className="text-center">
          <h1 className="text-3xl text-primary font-bold justify-center">254</h1>
          <p className="text-gray-400 pt-3">Successful Project</p>
        </div>
        <div className="text-center">
          <h1 className="text-3xl text-primary font-bold justify-center">254</h1>
          <p className="text-gray-400 pt-3">Successful Project</p>
        </div>
        <div className="text-center">
          <h1 className="text-3xl text-primary font-bold justify-center">2M</h1>
          <p className="text-gray-400 pt-3">Successful Project</p>
        </div>
        <div className="text-center">
          <h1 className="text-3xl text-primary font-bold justify-center">60++</h1>
          <p className="text-gray-400 pt-3">Successful Project</p>
        </div>
        
        
       </div>

    </section>

    </div>
  )
}

export default Service
