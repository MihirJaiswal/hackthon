'use client'
import React from "react";
import { motion } from "framer-motion";
import { How } from "./How";
import stress from "../../public/stress.jpg"
import anxiety from "../../public/anxiety.jpg"
import depression from "../../public/depression.svg"
import trauma from "../../public/trauma.jpg"
import logo from "../../public/logo.png"
import Image from "next/image";

const About = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="2xl:container 2xl:mx-auto lg:py-16 md:py-12 md:px-6 py-9 px-4 mt-20 h-full"
        >
            <motion.div 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col lg:flex-row justify-between gap-8"
            >
                <motion.div 
                    initial={{ y: -50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full lg:w-5/12 flex flex-col justify-center"
                >
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-100 pb-4">Stress Calculator</h1>
                    <p className="font-normal text-base leading-6 text-gray-400 ">Explore our website powered by advanced machine learning technology, designed to help you understand and manage stress levels effectively. Discover insights, tools, and resources to navigate life's challenges with resilience and calm.</p>
                </motion.div>
                <motion.div 
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full flex items-center justify-center"
                >
                    <Image
                        src={logo}
                        className=""
                        alt="Stress Calculator"
                        width={180}
                        height={50}
                        placeholder="blur"
                        priority
                    />
                    <p className="text-white text-5xl font-bold">Equllibrium</p>
                </motion.div>
            </motion.div>

            <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex lg:flex-row flex-col justify-between gap-8 pt-12"
            >
                <motion.div 
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="w-full lg:w-5/12 flex flex-col justify-center"
                >
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-100 pb-4">Why Stress Calculator</h1>
                    <p className="font-normal text-base leading-6 text-gray-400 ">The Stress Calculator on our website offers a unique way for individuals to gain insight into their mental well-being. Stress is a common aspect of daily life, but its impact can vary greatly from person to person. By using our Stress Calculator, individuals can quantify and better understand their own stress levels, empowering them to take proactive steps towards managing their mental health. This tool not only provides personalized feedback but also serves as a starting point for individuals to explore stress management techniques and strategies. Whether you're looking to reduce stress, improve resilience, or simply gain a deeper understanding of your own mental health, our Stress Calculator is here to support you on your journey to well-being.</p>
                </motion.div>
                <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="w-full lg:w-8/12 lg:pt-8"
                >
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md"
                    >
                        <motion.div 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-4 pb-6 flex justify-center flex-col items-center"
                        >
                            <Image
                                src={stress}
                                className="md:block hidden"
                                alt=""
                                width={200}
                                height={200}
                            />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">stress</p>
                        </motion.div>
                        <motion.div 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-4 pb-6 flex justify-center flex-col items-center"
                        >
                            <Image
                                src={anxiety}
                                className="md:block hidden"
                                alt=""
                                width={200}
                                height={200}
                            />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Anxiety</p>
                        </motion.div>
                        <motion.div 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-4 pb-6 flex justify-center flex-col items-center"
                        >
                            <Image
                                src={depression}
                                className="md:block hidden"
                                alt=""
                                width={200}
                                height={100}
                            />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Depression</p>
                        </motion.div>
                        <motion.div 
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-4 pb-6 flex justify-center flex-col items-center"
                        >
                            <Image
                                src={trauma}
                                className="md:block hidden"
                                alt=""
                                width={200}
                                height={100}
                            />
                            <p className="font-medium text-xl leading-5 text-gray-800 mt-4">Trauma</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
            {/* <How/> */}
        </motion.div>
    );
};

export default About;
