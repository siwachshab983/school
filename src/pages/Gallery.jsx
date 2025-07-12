import React from 'react'
import Header from '../components/common/Header'
import BreadCrumbs from '../components/common/BreadCrumbs'
import Footer from '../components/common/Footer'

const Gallery = () => {
    return (
        <>
            <Header />
            <BreadCrumbs />
            <div>gallery-content</div>
            <Footer />
        </>
    )
}

export default Gallery