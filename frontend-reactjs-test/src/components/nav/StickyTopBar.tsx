import React from 'react';
import { Navbar,  Image } from 'react-bootstrap';
import logo from './../../data/Gameloft_Logo_Flat_White_Line-01.png'
import Hamburger from './Hamburger';

const StickyTopBar = ()=>{
    return (
        <Navbar className="navbar-default d-flex justify-content-between" variant="light">
            <Image src={logo} />
            <Hamburger open={false} color="black"/>
        </Navbar>
    );
}

export default StickyTopBar;