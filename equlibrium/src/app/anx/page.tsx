import AnxietyLevel from '@/components/AnxietyLevel'
import HomeHeader from '@/components/HomeHeader'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-6'>
        <HomeHeader/>
        <AnxietyLevel/>
    </div>
  )
}

export default page