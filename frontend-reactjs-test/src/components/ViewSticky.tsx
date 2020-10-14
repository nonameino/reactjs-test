import React from 'react';
import './../css/view-sticky.scss';

import Icon from './subcomponents/Icon';
import Hamburger from './subcomponents/Hamburger';

import logo from './../data/Gameloft_Logo_Flat_White_Line-01.png'
import ShareImg from '../data/share_1.png';
import MailImg from './../data/mail_1.png';
import SupportImg from './../data/support_1.png';
import ShareImgHover from '../data/share_2.png';
import MailImgHover from './../data/mail_2.png';
import SupportImgHover from './../data/support_2.png';

export class ViewStickyTop extends React.Component {
    render() {
        return (
            <div className='full-parent-width sticky -top'>
                <nav className='sticky-top-container'>
                    <div className='full-parent sticky-top-bg' />
                    <img src={logo} alt="logo" />
                    <Hamburger open={false} color='black' />
                </nav>
            </div>
        );
    }
}

export class ViewStickyBottom extends React.Component {
    render() {
        return (
            <div className='full-parent-width sticky -bottom'>
                <div className='sticky-bottom-container'>
                    <Icon src={ShareImg} hoverSrc={ShareImgHover}/>
                    <Icon src={MailImg} hoverSrc={MailImgHover}/>
                    <Icon src={SupportImg} hoverSrc={SupportImgHover}/>
                </div>
            </div>
        );
    }
}