import React from 'react'
import Image from 'next/image'
import img from '../../public/brain-svgrepo-com.svg'
import img2 from '../../public/accessibility-svgrepo-com.svg'
import img3 from '../../public/yoga-svgrepo-com.svg'

const Benefits = () => {
  return (
    <section className='bg-herorev h-[100vh]'>
        <h1 className="mb-4 text-3xl px-12 text-center font-bold leading-none tracking-tight text-white md:text-5xl lg:text-6xl ">Enpowering Minds, Healing Hearts: Your Path to Mental Wellness </h1>
        <div className='flex'>
        <div className="box p-20 text-center transition-all">
      <Image
        src={img}
        alt=""
        className="h-32 mx-auto mb-4"
      />
      <h3 className="text-4xl font-bold text-gray-200 mb-6">Reduce Mental problems</h3>
      <p className="text-lg text-gray-500 leading-relaxed">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut illum fugit iste aliquid at, nihil molestias unde.
      </p>
    </div>

    <div className="box p-20 text-center transition-all">
      <Image
        src={img2}
        alt=""
        className="h-32 mx-auto mb-4"
      />
      <h3 className="text-4xl font-bold text-gray-200 mb-6">Cure depression</h3>
      <p className="text-lg text-gray-500 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis esse laborum voluptate nam adipisci sapiente sint. Totam non necessitatibus atque?
      </p>
    </div>

    <div className="box p-20 text-center">
      <Image
        src={img3}
        alt=""
        className="h-32 mx-auto mb-4"
      />
      <h3 className="text-4xl font-bold text-gray-200 mb-6">Reduce Stress</h3>
      <p className="text-lg text-gray-500 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum voluptate quisquam tempora odio ad dolores quos, repellendus iste?
      </p>
    </div>
        </div>
    </section>
  )
}

export default Benefits