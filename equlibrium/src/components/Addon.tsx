'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Addon = () => {
  return (
    <motion.div
      className='h-full bg-revhero'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className='flex px-24'>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-gray-300 text-6xl font-bold my-6 mb-16'>About Us</h2>
          <p className="mb-3 text-lg md:text-xl text-gray-300">Welcome to Equilibrium, a compassionate space dedicated to supporting mental well-being and fostering understanding around mental health challenges.</p>
          <p className="text-gray-300 py-3">At Equilibrium, we believe that mental health is a fundamental aspect of overall wellness, deserving of attention, care, and destigmatization. Whether you're navigating your own mental health journey or seeking resources to support a loved one, our platform is designed to provide a wealth of information, guidance, and community connection.</p>
          <p className="text-gray-300 py-3">Our mission is to empower individuals with knowledge, tools, and encouragement to prioritize their mental wellness and seek the support they need. Through informative articles, expert insights, personal stories, and practical tips, we aim to break down barriers to mental health care and promote a culture of openness and acceptance.</p>
          <p className="text-gray-300 py-3">We understand that every person's experience with mental health is unique, and we strive to create a space that is inclusive, respectful, and supportive of all backgrounds and identities. Here, you'll find a diverse range of perspectives and resources to help you on your journey toward mental health and emotional well-being.</p>
        </motion.div>
        <div>
          {/* You can add additional content or animations here if needed */}
        </div>
      </div>
    </motion.div>
  )
}

export default Addon;
