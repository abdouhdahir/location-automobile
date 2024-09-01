import React from 'react'
import Marque from '../components/homepage/Marque'
import Allvehicule from '../components/homepage/Allvehicule'
import Blog from '../components/homepage/Blog'
import Statistic from '../components/homepage/Statistic'
import Finance from '../components/homepage/Finance'
import Popular from '../components/homepage/Popular'
import Shop from '../components/homepage/Shop'
import Reviews from '../components/homepage/Reviews'
import Post from '../components/homepage/Post'
import Banner from '../components/homepage/Banner'

const HomePage = () => {
  return (
    <div className='relative'>
        <Marque/>
        <Allvehicule/>
        <Blog/>
        <Statistic/>
        <Finance/>
        <Popular/>
        <Shop/>
        <Reviews/>
        <Post/>
        <Banner/>
        <div className='w-[100%] h-[2px] bg-bgpopu absolute bottom-[-129px] pb-20 ' style={{borderRadius:"90px 90px 0 0"}}></div>
    </div>
  )
}

export default HomePage
