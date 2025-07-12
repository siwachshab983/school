import React from 'react'
import OpenEvent from '../components/News & Event/OpenEvent'
import OurTopEvents from '../components/News & Event/OurTopEvents'
import Header from '../components/common/Header'
import BreadCrumbs from '../components/common/BreadCrumbs'
import Footer from '../components/common/Footer'

const News = () => {
    return (
        <>
            <Header />
            <BreadCrumbs />
            <OpenEvent />
            <OurTopEvents />
            <Footer />
        </>
    )
}

export default News