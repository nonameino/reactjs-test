import React from 'react';

import ShareImg from '../../data/share.svg';
import MailImg from './../../data/mail.svg';
import SupportImg from './../../data/support.svg';
import CircleBg from './../../data/circle-bg.svg';

const StickyBottom = ()=>{
    return (
        <div className="sticky-bar-bottom-container sticky">
            <img src={ShareImg}  alt="share" />
            <img src={MailImg} alt="mail" />
            <img src={SupportImg} alt="support" />
            <div className='xxx icon-container' >
                {/* <img src={CircleBg} alt='fake'/> */}
                <img src={SupportImg} className='icon' alt='fake' />
            </div>
        </div>
    );
}

export default StickyBottom;