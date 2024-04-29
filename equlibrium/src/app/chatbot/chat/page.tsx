import Chat from '@/components/Chat'
import HomeHeader from '@/components/HomeHeader'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-6'>
        <HomeHeader/>
        <Chat/>
    </div>
  )
}

export default page