import React from 'react'
import Header from '../components/common/Header'
import BreadCrumbs from '../components/common/BreadCrumbs'
import WhoWeAre from '../components/about/WhoWeAre'
import OurMission from '../components/about/OurMission'
import Footer from '../components/common/Footer'

const AboutUs = () => {
    return (
        <>
            <Header />
            <BreadCrumbs />
            <WhoWeAre />
            <OurMission />
            <Footer />
        </>
    )
}

export default AboutUs