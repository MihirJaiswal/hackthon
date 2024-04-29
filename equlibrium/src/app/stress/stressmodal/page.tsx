import HomeHeader from '@/components/HomeHeader'
import StressLevelPrediction from '@/components/StressLevelPrediction'
import React from 'react'

const page = () => {
  return (
    <div className='h-[100vh]'>
        <HomeHeader/>
        <StressLevelPrediction/>
    </div>
  )
}

export default page