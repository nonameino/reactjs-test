import React from 'react';

import './../css/view-footer.scss';

import lgWhiteLogo from './../data/Gameloft_Logo_Flat_White_Line.png';
import fbWhite from './../data/facebook_white.png';
import youtubeWhite from './../data/youtube_white.png';
import linkedinWhite from './../data/linkedin_white.png';
import twitterWhite from './../data/twitter_white.png';
// import langIcon from './../data/lang_icon.png';
import { View, ViewContainer } from './subcomponents/View';


export default class ViewFooter extends React.Component {
    render() {
        return  (
            <View className='view-footer'>
                <ViewContainer className='-text-white view-footer-container'>
                    <div className='contact-logo'>
                        <img className='footer-gl-white-logo' src={lgWhiteLogo} alt='gl-logo' />
                        <h2> Follow Us</h2>
                        <div className='social-group'>
                            <img src={fbWhite} alt='fb-logo' />
                            <img src={linkedinWhite} alt='linkedin-logo' />
                            <img src={twitterWhite} alt='twitter-logo' />
                            <img src={youtubeWhite} alt='youtube-logo' />
                        </div>
                        <select className='footer-language-box' id='select-platform'>
                            <option id='English' value='DEFAULT'>
                                English
                            </option>
                            <option id='Vietnamese' value='1'>Vietnamese</option>
                            <option id='Jananese' value='2'>Jananese</option>
                        </select>
                    </div>
                    <div className='contact-details'>
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
                        <h2>LEGAL</h2>
                        <br/>
                        <p>Term of Use</p>
                        <p>Privacy Policy</p>
                        <p>Cookies Policy</p>
                        <p>EULA</p>
                        <p>Legal Notices</p>
                        <p>Event Rules</p>
                        <p>Business Contacts</p>
                    </div>
                    <div className='footer-bottom-text'>
                        <p>©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo are trademarks of Gameloft in the U.S. and/or other countries.<br/>
                            All other trademarks are the property of their respective owners.</p>
                    </div>
                </ViewContainer>
            </View>
        );
    }
}