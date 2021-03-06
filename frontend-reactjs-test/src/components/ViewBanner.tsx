import React from 'react';
import './../css/view-banner.scss';
import starImg from './../data/star.png';
import starFullImg from './../data/star_full.png';
import btnNitendoIng from './../data/button_nitendo.png';
import btnMicrosoftIng from './../data/button_microsoft.png';
import btnSteamIng from './../data/button_steam.png';
import {View, ViewContainer} from './subcomponents/View';
import styled from 'styled-components';

const FullViewBanner:any = styled(View)`
    flex-direction: column;
    justify-content: flex-end;
    @media screen and (max-width: 768px) {
        min-height: 870px;
    }
`

interface ViewBannerState {
    gameName: string,
    rateValue: number,
    banner: string,
    decription: string,
}

export default class ViewBanner extends React.Component<any,ViewBannerState> {
    constructor(props:any) {
        super(props);
        this.state = {
            gameName: 'GAMELOFT GAME',
            rateValue: 4,
            banner: '/images/banner.png',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eisumod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim venniam, quis nostrud',
        }
    }

    render() {
        const stars = [0,0,0,0,0]
                        .map((value, index)=>index<this.state.rateValue ? 1 : 0)
                        .map((value, index)=><img key={index} src={value === 1 ? starFullImg : starImg} alt='rate-star' />);
        return (
            <FullViewBanner>
            {/* <div className='full-viewport -text-blue'> */}
                <ViewContainer className='view-banner-container'>
                    <img className='banner full-parent' src={process.env.PUBLIC_URL + this.state.banner} alt='banner' />
                    <div className='view-banner-content'>
                        <h1 className='view-title-text'>{this.state.gameName}</h1>
                        <div className='rate-container'>
                            <p className='view-banner-rate-tex'>Rating/Action | {stars}</p>
                        </div>
                        <br/>
                        <p className="view-banner-details-text">{this.state.decription}</p>
                        <br/>
                    </div>
                </ViewContainer>
                <div className='full-parent-width view-container -text-blue view-market'>
                    <ViewContainer className='view-market-container'>
                        <h3 className='download-text'>Download latest version</h3>
                        <div className='market-group'>
                            <img id='btnNitendo' src={btnNitendoIng} alt='btnNitendo' />
                            <img id='btnMicrosoft' src={btnMicrosoftIng} alt='btnMicrosoft' />
                            <img id='btnSteam' src={btnSteamIng} alt='btnSteam' />
                        </div>
                    </ViewContainer>
                </div>
            {/* </div> */}
            </FullViewBanner>
        )
    }
}