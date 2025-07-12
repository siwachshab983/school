import React from 'react'
import Header from '../components/common/Header'
import HomeTopSlider from '../components/home/HomeTopSlider'
import OurActivities from '../components/home/OurActivities'
import LatestBlog from '../components/home/LatestBlog'
import HomeMeetOurTeam from '../components/home/HomeMeetOurTeam'
import OurGallery from '../components/home/OurGallery'
import Footer from '../components/common/Footer'

const Home = () => {
    return (
        <>
            <Header />
            <HomeTopSlider />
            <OurActivities/>
            <LatestBlog />
            <HomeMeetOurTeam />
            <OurGallery />
            <Footer/>
        </>
    )
}

export default Home