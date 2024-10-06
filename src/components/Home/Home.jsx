import React from 'react'
import HeroImg from '../../assets/HeroImg.png'

const Home = () => {
  return (
    <div className='flex relative'>
        <img src={HeroImg} alt="" className=' w-full h-{397px}' />
        <p className=' absolute mt-24 ml-20 text-white font-semibold text-6xl'>PMSSS</p>
        <p className=' absolute mt-48 ml-20 text-white font-semibold text-{18px} font-rubik'>PRADHAN MANTRI SPECIAL SCHOLARSHIP SCHEME FOR J&K AND LADAKH</p>
    </div>
  )
}

export default Home