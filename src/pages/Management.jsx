import React from 'react'
import Founder from '../components/Management/Founder'
import OurTeam from '../components/Management/OurTeam'
import Footer from '../components/common/Footer'
import BreadCrumbs from '../components/common/BreadCrumbs'
import Header from '../components/common/Header'

const Management = () => {
    return (
        <>
            <Header />
            <BreadCrumbs />
            <Founder />
            <OurTeam />
            <Footer />
        </>
    )
}

export default Management