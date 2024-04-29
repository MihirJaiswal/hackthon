import About from '@/components/About'
import HomeHeader from '@/components/HomeHeader'
import { How } from '@/components/How'
import {Btn} from '@/components/Btn'
import React from 'react'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div>
      <HomeHeader/>
      <About/>
      <How/>
      <Btn/>
      <Footer/>
    </div>
  )
}

export default page