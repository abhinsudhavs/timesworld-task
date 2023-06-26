import React from 'react'
import CountryList from './Countries/CountryList'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'
const Home = () => {
    return (
        <>
            <Nav />
            <CountryList/>
            <Footer/>
        </>
    )
}

export default Home