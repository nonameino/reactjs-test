import React from 'react';
import './../css/view-banner.scss';
import starImg from './../data/star.png';
import starFullImg from './../data/star_full.png';
import btnNitendoIng from './../data/button_nitendo.png';
import btnMicrosoftIng from './../data/button_microsoft.png';
import btnSteamIng from './../data/button_steam.png';
import {View, ViewContainer} from './subcomponents/View';

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
        const styles = {
            viewBannerBG: {
                backgroundImage: `url(${this.state.banner})`,
            }
        }
        const stars = [0,0,0,0,0]
                        .map((value, index)=>index<this.state.rateValue ? 1 : 0)
                        .map((value, index)=><img key={index} src={value === 1 ? starFullImg : starImg} alt='rate-star' />);
        return (
            // <div className='full-viewport -text-blue'>
            <View className='view-banner'>
                <ViewContainer className='view-banner-container'>
                    <img className='banner full-viewport' src={this.state.banner} alt='banner' />
                    <div className='view-banner-content'>
                        <h1 className='view-title-text'>{this.state.gameName}</h1>
                        <div className='rate-container'>
                            <p className='view-banner-rate-tex'>Rating/Action | {stars}</p>
                        </div>
                        <br/>
                        <p className="view-banner-details-text">{this.state.decription}</p>
                        <br/>
                    </div>
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
                </ViewContainer>
                
            {/* </div> */}
            </View>
        )
    }
}