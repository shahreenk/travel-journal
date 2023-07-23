import React from 'react'
import logo from '../assets/images/globe.png'
import './Header.css'

function Header() {
    return (
        <header>
            <img src={logo} />
            <h1>my travel journal</h1>
        </header>
    )
}

export default Header