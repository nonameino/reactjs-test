import React from 'react';
import { Image } from 'react-bootstrap';
import logo from './../../data/Gameloft_Logo_Flat_White_Line-01.png'
import Hamburger from './../nav/Hamburger';
import './stickybar.css'

const StickyTop = ()=>{
    return (
        <div className='sticky-bar-top-container sticky'>
            <nav className='sticky-bar-top'>
                <Image src={logo} alt="logo" />
                <Hamburger open={false} color='black' />
            </nav>
        </div>
    )
}

export default StickyTop;