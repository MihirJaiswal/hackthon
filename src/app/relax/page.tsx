import React from 'react'
import HomeHeader from '@/components/HomeHeader'
import AnxietyLevel from '@/components/AnxietyLevel'

const page = () => {
  return (
    <div className='flex flex-col gap-6'>
       <HomeHeader/>
        <AnxietyLevel/>
    </div>
  )
}

export default page