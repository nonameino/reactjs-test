import React from 'react';
import './hotspot.css'
import xx from './../../data/banner.png'

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
            banner: './../../data/banner.png',
            decription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eisumod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim venniam, quis nostrud',
        }
    }

    render() {
        return (
            <div className="hotspot-container">
                {/* <img src={this.state.banner} alt="banner" /> */}
                <img src={xx} alt="banner" />
                <div className="game-content-container">
                    <h2>{this.state.gameName}</h2>
                    <p>Rating/Action</p>
                    <p>{this.state.decription}</p>
                </div>
            </div>
        )
    }
}
