import React from 'react'
import HomeHeader from '@/components/HomeHeader'
import Sleep from '@/components/Sleep'


const page = () => {
  return (
    <div className='flex flex-col gap-6'>
       <HomeHeader/>   
       <Sleep/> 
    </div>
  )
}

export default page