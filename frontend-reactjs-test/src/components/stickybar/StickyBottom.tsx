import React from 'react';
import Icon from '../Icon';

import ShareImg from '../../data/share_1.png';
import MailImg from './../../data/mail_1.png';
import SupportImg from './../../data/support_1.png';
import ShareImgHover from '../../data/share_2.png';
import MailImgHover from './../../data/mail_2.png';
import SupportImgHover from './../../data/support_2.png';

const StickyBottom = ()=>{
    return (
        <div className="sticky-bar-bottom-container sticky">
            <Icon src={ShareImg} hover={ShareImgHover}/>
            <Icon src={MailImg} hover={MailImgHover}/>
            <Icon src={SupportImg} hover={SupportImgHover}/>
        </div>
    );
}

export default StickyBottom;