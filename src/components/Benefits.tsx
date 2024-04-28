import React from 'react'

const Benefits = () => {
  return (
    <section className='bg-herorev h-[100vh]'>
        <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl ">We invest in the world’s potential</h1>
        <div className='flex'>
        <div className="box p-20 text-center transition-all">
      <img src="img/service-1.png" alt="" className="h-32 mx-auto mb-4" />
      <h3 className="text-4xl font-bold text-white mb-6">Reduce Mental problems</h3>
      <p className="text-lg text-gray-500 leading-relaxed">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut illum fugit iste aliquid at, nihil molestias unde.
      </p>
    </div>

    <div className="box p-20 text-center transition-all">
      <img src="img/service-2.png" alt="" className="h-32 mx-auto mb-4" />
      <h3 className="text-4xl font-bold text-white mb-6">Cure depression</h3>
      <p className="text-lg text-gray-500 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis esse laborum voluptate nam adipisci sapiente sint. Totam non necessitatibus atque?
      </p>
    </div>

    <div className="box p-20 text-center">
      <img src="img/service-3.png" alt="" className="h-32 mx-auto mb-4" />
      <h3 className="text-4xl font-bold text-white mb-6">Reduce Stress</h3>
      <p className="text-lg text-gray-500 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptate quisquam tempora odio ad dolores quos, repellendus iste?
      </p>
    </div>
        </div>
    </section>
  )
}

export default Benefits