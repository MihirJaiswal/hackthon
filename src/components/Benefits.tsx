import React from 'react'

const Benefits = () => {
  return (
    <section className='bg-herorev h-[100vh]'>
        <h1 className="mb-4 text-4xl text-center font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl ">We invest in the world’s potential</h1>
        <div className='flex'>
        <div className="box p-20 text-center transition-all">
      <img src="img/service-1.png" alt="" className="h-32 mx-auto mb-4" />
      <h3 className="text-4xl font-bold text-white mb-6">free shipping</h3>
      <p className="text-lg text-gray-500 leading-relaxed">
        Experience worry-free shopping with our free shipping option, ensuring your beauty essentials reach you without extra cost.
      </p>
    </div>

    <div className="box p-20 text-center transition-all">
      <img src="img/service-2.png" alt="" className="h-32 mx-auto mb-4" />
      <h3 className="text-4xl font-bold text-white mb-6">secure payment</h3>
      <p className="text-lg text-gray-500 leading-relaxed">
        Shop confidently with our secure payment methods, safeguarding your transactions and personal information.
      </p>
    </div>

    <div className="box p-20 text-center">
      <img src="img/service-3.png" alt="" className="h-32 mx-auto mb-4" />
      <h3 className="text-4xl font-bold text-white mb-6">24/7 support</h3>
      <p className="text-lg text-gray-500 leading-relaxed">
        Our commitment to you extends around the clock, with 24/7 support ready to assist you on your beauty journey.
      </p>
    </div>
        </div>
    </section>
  )
}

export default Benefits