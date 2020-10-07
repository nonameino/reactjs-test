import React from 'react';
import './hotspot.css'
import fakeBgImg from './../../data/banner.png'
// import { url } from 'inspector';
import btnNitendoIng from './../../data/button_nitendo.png'
import btnMicrosoftIng from './../../data/button_microsoft.png'
import btnSteamIng from './../../data/button_steam.png'
import starImg from './../../data/star.png';
import starFullImg from './../../data/star_full.png';

interface HotspotState {
    gameName: string,
    rateValue: number,
    banner: string,
    decription: string,
}

export default class HotSpotBanner extends React.Component<{},HotspotState> {
    constructor(props:{}) {
        super(props);
        this.state = {
            gameName: 'GAMELOFT GAME',
            rateValue: 4,
            banner: fakeBgImg,
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eisumod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim venniam, quis nostrud',
        }
    }

    render() {
        const styles = {
            hotspotContainer: {
                width: '100%',
                height: '100vh',//'auto', //error
                margin: 0,
                backgroundImage: `url(${this.state.banner})`,
                display: 'flex',
                flexDirection: 'column' as 'column',
                justifyContent: 'flex-end',
                // alignItems: 'center',
            }
        };

        const stars = [0,0,0,0,0]
                        .map((value, index)=>index<this.state.rateValue ? 1 : 0)
                        .map(value=><img src={value === 1 ? starFullImg : starImg} alt='rate-star' />);


        return (
            <div style={styles.hotspotContainer} >
            {/* <div className='hotspot-container' > */}
                {/* <img src={this.state.banner} alt="banner" /> */}
                {/* <img src={xx} alt="banner" /> */}
                <div className="game-content-container">
                    <h1>{this.state.gameName}</h1>
                    <div className='rate-container'>
                        <p className='game-rate-text'>Rating/Action | </p>
                        {stars}
                    </div>
                    <p className="game-description">{this.state.decription}</p>
                </div>
                <div className='hotspot-market-container' >
                    <h4 style={{color:'#2699FB'}}>Download lastest version</h4>
                    <div className='market-buttons-container'>
                        <img src={btnNitendoIng} alt='btnNitendo' />
                        <img src={btnMicrosoftIng} alt='btnMicrosoft' />
                        <img src={btnSteamIng} alt='btnSteam' />
                    </div>
                </div>
            </div>
        )
    }
}
