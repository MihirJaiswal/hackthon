import Image from 'next/image'
import React from 'react'
import HomeNav from './HomeNav'
import HomeMobileNav from './HomeMobileNav'
import logo from '../../public/logo.png'




const HomeHeader = () => {
  return (
    <div className='fixed w-full top-0 z-50 bg-mainb backdrop-blur-sm border-b border-n-6 lg:bg-black lg:backdrop-blur-sm'>
        <div className='flex justify-between items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
        <a href="/" className='flex items-center w-[12rem] xl:mr-8'>
            <Image
            alt='logo'
            src={logo}
            width={52}
            height={42}
            className='max-sm:size-10 m-2'
            />
            <p className='text-n-1 font-bold text-2xl max-lg:hidden uppercase'>Equlibrium</p>
        </a>
        <div>
        <HomeNav/>
        </div>
        
      <div className='flex-between gap-5'>

         <HomeMobileNav/>
      </div>
    </div>  
    </div>
  )
}

export default HomeHeader