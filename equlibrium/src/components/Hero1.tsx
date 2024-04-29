'use client'
import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import Link from 'next/link';
import { motion, AnimatePresence, useCycle } from 'framer-motion';
import robot from '../../public/robot.svg';

const Hero1 = () => {
  const [toggle, cycleToggle] = useCycle(false, true);
  
  return (
    <div className='bg-herob mt-4 h-full'>
      <section className=" bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 ">
          <motion.div 
            initial={{ opacity: 0.1, y: 140 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8}} 
            className="flex flex-col justify-center gap-8"
          >
            <h1 className="font-semibold text-gray-100 text-[40px] leading-[48px] lg:text-[48px] lg:leading-[60px]  xl:text-[58px] xl:leading-[74px] ">
            Introducing Equilibria: Your Personal Mental Health Companion
            </h1>
            <p className="leading-[30px] tracking-[2%] md:font-normal text-[20px] leading-[36px] text-gray-400">
            Your Path to Stress Prediction, Anxiety Assessment, and Mindful Healing!
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="relative inline-flex h-12 w-40 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <a href="/chatbot/chat">Get Started</a>
              </span>
            </motion.button>
          </motion.div>
          <AnimatePresence>
            <motion.div
              key="robot-div"
              initial={{ y: toggle ? 0 : 40 }}
              animate={{ y: toggle ? 40 : 0 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
              className='px-auto mr-6 md:mr-0'
            >
              <Image
                src={robot} // Use the imported robot image
                alt="robot"
                width={500}
                height={500}
                className="mt-20 ml-20"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Hero1;
