'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import robot from '../../public/robot.svg'


const Hero1 = () => {
  return (
    <div className='bg-herob mt-4 h-full'>
      <section className=" bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 ">
          <motion.div // Wrap with motion.div for animation
            initial={{ opacity: 0.1, y: 140 }} // Initial animation values
            whileInView={{ opacity: 1, y: 0 }} // Animation when component appears
            transition={{ duration: 0.8}} // Animation duration
            className="flex flex-col justify-center gap-8"
          >
            <h1 className="font-semibold text-gray-100 text-[40px] leading-[48px] lg:text-[48px] lg:leading-[60px]  xl:text-[58px] xl:leading-[74px] ">
            Introducing Equilibria: Your Personal Mental Health Companion
            </h1>
            <p className="leading-[30px] tracking-[2%] md:font-normal text-[20px] leading-[36px] text-gray-400">
            Your Path to Stress Prediction, Anxiety Assessment, and Mindful Healing!
            </p>
            <motion.button // Wrap with motion.button for animation
              whileHover={{ scale: 1.05 }} // Animation on hover
              whileTap={{ scale: 0.95 }} // Animation when tapped
              className="relative inline-flex h-12 w-40 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <a href="">Get Started</a>
              </span>
            </motion.button>
          </motion.div>
          <div className='px-auto mr-6 md:mr-0'>
            <Image
              src={robot}
              alt="robot"
              width={500}
              height={500}
              className="mt-20 ml-20"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero1;
