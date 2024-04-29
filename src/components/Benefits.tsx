'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import img from '../../public/brain-svgrepo-com.svg';
import img2 from '../../public/accessibility-svgrepo-com.svg';
import img3 from '../../public/yoga-svgrepo-com.svg';

const Benefits = () => {
  return (
    <section className='bg-herorev h-[100vh]'>
     <motion.div
            initial={{ opacity: 0.1, y: 140 }} // Initial animation values
            whileInView={{ opacity: 1, y: 0 }} // Animation when component appears
            transition={{ duration: 0.8}} >
     <h1 className="mb-16 text-3xl px-12 text-center font-bold leading-none tracking-tight text-white md:text-5xl lg:text-6xl ">Empowering Minds, Healing Hearts </h1>
     </motion.div>
      <div className='flex'>
        <motion.div
          className="box p-20 text-center transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            src={img}
            alt=""
            className="h-32 mx-auto mb-4"
          />
          <h3 className="text-4xl font-bold text-gray-200 mb-6">Mindfullness</h3>
          <p className="text-lg text-gray-500 leading-relaxed">
          Enhance mindfulness: Our model suggests mindfulness practices tailored to your unique needs for inner peace.
          </p>
        </motion.div>

        <motion.div
          className="box p-20 text-center transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            src={img2}
            alt=""
            className="h-32 mx-auto mb-4"
          />
          <h3 className="text-4xl font-bold text-gray-200 mb-6">Cure depression</h3>
          <p className="text-lg text-gray-500 leading-relaxed">
          Our model utilizes advanced techniques, providing personalized insights to aid in depression management and recovery.
          </p>
        </motion.div>

        <motion.div
          className="box p-20 text-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Image
            src={img3}
            alt=""
            className="h-32 mx-auto mb-4"
          />
          <h3 className="text-4xl font-bold text-gray-200 mb-6">Reduce Stress</h3>
          <p className="text-lg text-gray-500 leading-relaxed">
           Our model offers personalized strategies to alleviate stress, promoting well-being and resilience in daily life.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits;
