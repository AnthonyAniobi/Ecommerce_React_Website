import React from 'react'
import Navbar from './Navbar'
import Head from './Head'
import Search from './Search'
import './Header.css'

const Header = () => {
    return (
        <>
            <Head />
            <Search />
            <Navbar />
        </>
    )
}

export default Header