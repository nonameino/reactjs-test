import React from 'react';
import './../css/view-events.scss';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import 'react-circular-progressbar/dist/styles.css';

import Slider from 'react-slick';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import EventCard from './subcomponents/EventCard';
import { View, ViewContainer } from './subcomponents/View';
import Global from '../Global';
import styled from 'styled-components';

const cardSizes = {
    windows: {
        width: 401,
        height: 531,
    },
    mobile: {
        width: 280,
        height: 385,
    }
};

const FullViewEvents = styled(View)`
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


type ChangingProgressProviderState = {
    valuesIndex: number;
}

type ChangingProgressProviderProps = {
    values: number[];
    interval: number;
    children: (value: number) => React.ReactNode;
}

class ChangingProgressProvider extends React.Component<ChangingProgressProviderProps,ChangingProgressProviderState> {
    static defaultProps = {
        interval: 3000,
    }

    state = {
        valuesIndex: 0,
    }

    componentDidMount() {
        setInterval(()=>{
            this.setState({
                valuesIndex: (this.state.valuesIndex + 1) % this.props.values.length,
            });
        }, this.props.interval)
    }

    render() {
        return this.props.children(this.props.values[this.state.valuesIndex]);
    }
}

interface ViewEventsState {
    activeCircleIndex: number;
    cardWidth: number;
    cardHeight: number;
    numCardCanShow: number;
}

export default class ViewEvents extends React.Component<any,ViewEventsState> {

    constructor(props:any) {
        super(props);

        this.state = {
            activeCircleIndex: 0,
            cardWidth: 0,
            cardHeight: 0,
            numCardCanShow: 5,
        };
    }

    componentDidMount() {
        let cardWidth = Global.isMobile() ? cardSizes.mobile.width : cardSizes.windows.width;
        let cardHeight = Global.isMobile() ? cardSizes.mobile.height : cardSizes.windows.height;

        let numCardCanShow = Math.floor((window.innerWidth - 30) / cardWidth);
        if (numCardCanShow >=5)
            numCardCanShow = 4;
        console.log("num of card[" + (window.innerWidth - 30) + "," + cardWidth + "]: " + numCardCanShow);

        this.setState({
            cardWidth: cardWidth,
            cardHeight: cardHeight,
            numCardCanShow: numCardCanShow,
        })
    }

    render() {
        const settings = {
            infinite: true,
            dots: true,
            centerMode: true,
            slidesToShow: this.state.numCardCanShow,
            slidesToScroll: 1,
            speed: 300,
            autoplay: true,
            autoplaySpeed: 3000,
            customPaging: (i:number)=>{
                return (<ChangingProgressProvider values={this.state.activeCircleIndex === i ? [0, 100] : [0]}>
                    {percentage=>(
                        <CircularProgressbar value={percentage}
                                            text={(i+1).toString().padStart(2)}
                                            styles={buildStyles({pathTransition: percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s"})}/>
                    )}
                </ChangingProgressProvider>);
            },
            beforeChange: (current:number, next:number) =>{
                // this.setState({activeCircleIndex: next});
            },
            afterChange: (current:number) =>{
                this.setState({activeCircleIndex: current});
            },
        }

        const cardsDetails = [
            {
                url: '/images/sliderbg.png',
                title: 'SHORT TITLE HERE',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ...',
            },
            {
                url: '/images/sliderbg.png',
                title: 'SHORT TITLE HERE',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ...',
            },
            {
                url: '/images/sliderbg.png',
                title: 'SHORT TITLE HERE',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ...',
            },
            {
                url: '/images/sliderbg.png',
                title: 'SHORT TITLE HERE',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ...',
            },
            {
                url: '/images/sliderbg.png',
                title: 'SHORT TITLE HERE',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ...',
            },
        ];

        const eventCards = cardsDetails.map((cardDetails, index)=>(
            <EventCard  width={this.state.cardWidth}
                        height={this.state.cardHeight}
                        key={index} 
                        url={process.env.PUBLIC_URL + cardDetails.url} 
                        shortTitle={cardDetails.title} 
                        description={cardDetails.description} />
        ));

        return (
            <FullViewEvents className='view-events'>
                <ViewContainer className='view-events-container'>
                    <div className='view-event-title'>
                        <h1 className='view-events-header'>Special Events & Promotional</h1>
                        <p className='view-event-description'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.</p>
                    </div>
                </ViewContainer>
                <div className='events-slider-container'>
                    <Slider {...settings}>
                        {eventCards}
                    </Slider>
                </div>
            </FullViewEvents>
        )
    }
};