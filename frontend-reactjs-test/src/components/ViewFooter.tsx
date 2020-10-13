import React from 'react';

import './../css/view-footer.scss';

import lgWhiteLogo from './../data/Gameloft_Logo_Flat_White_Line.png';
import fbWhite from './../data/white_facebook.png';
import youtubeWhite from './../data/white_youtube.png';
import linkedinWhite from './../data/white_linkedin.png';
import twitterWhite from './../data/white_twitter.png';
import fbBlue from './../data/blue_facebook.png';
import youtubeBlue from './../data/blue_youtube.png';
import linkedinBlue from './../data/blue_linkedin.png';
import twitterBlue from './../data/blue_twitter.png';
// import langIcon from './../data/lang_icon.png';
import { View, ViewContainer } from './subcomponents/View';
import Global from '../Global';
import styled from 'styled-components';

const FullViewFooter:any = styled(View)`
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;


export default class ViewFooter extends React.Component {
    render() {
        return  (
            <FullViewFooter className='view-footer'>
                <ViewContainer className='-text-white view-footer-container'>
                    {Global.isMobile() 
                    ? (<div className='social-group'>
                            <h2> Follow Us</h2>
                            <div className='social-icons'>
                                <img src={fbBlue} alt='fb-logo' />
                                <img src={linkedinBlue} alt='linkedin-logo' />
                                <img src={twitterBlue} alt='twitter-logo' />
                                <img src={youtubeBlue} alt='youtube-logo' />
                            </div>
                        </div>)
                    : null}
                    <div className='contact-logo'>
                        <img className='footer-gl-white-logo' src={lgWhiteLogo} alt='gl-logo' />
                        {!Global.isMobile()
                        ? (<div className='social-group'>
                                <h2> Follow Us</h2>
                                <div className='social-icons'>
                                    <img src={fbWhite} alt='fb-logo' />
                                    <img src={linkedinWhite} alt='linkedin-logo' />
                                    <img src={twitterWhite} alt='twitter-logo' />
                                    <img src={youtubeWhite} alt='youtube-logo' />
                                </div>
                            </div>)
                        : null}
                        <select className='footer-language-box' id='select-platform'>
                            <option id='English' value='DEFAULT'>
                                English
                            </option>
                            <option id='Vietnamese' value='1'>Vietnamese</option>
                            <option id='Jananese' value='2'>Jananese</option>
                        </select>
                    </div>
                    <div className='contact-details'>
                        <div className='contact-details-visit'>
                            <h2>VISIT</h2>
                            <br/>
                            <p>Gameloft Games</p>
                            <p>Gameloft Careers</p>
                            <p>Gameloft News</p>
                            <p>Gameloft Forum</p>
                            <p>Gameloft Corporate</p>
                            <p>Gameloft Advertising</p>
                            <p>Gameloft Support</p>
                            <br/>
                        </div>
                        <div className='contact-details-legal'>
                            <h2>LEGAL</h2>
                            <br/>
                            <p>Term of Use</p>
                            <p>Privacy Policy</p>
                            <p>Cookies Policy</p>
                            <p>EULA</p>
                            <p>Legal Notices</p>
                            <p>Event Rules</p>
                            <p>Contest Rules</p>
                            <p>Business Contacts</p>
                        </div>
                    </div>
                    <div className='footer-bottom-text'>
                        <p>©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo are trademarks of Gameloft in the U.S. and/or other countries.<br/>
                            All other trademarks are the property of their respective owners.</p>
                    </div>
                </ViewContainer>
            </FullViewFooter>
        );
    }
}