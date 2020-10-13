import React from 'react';
import './../css/view-events.scss';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import 'react-circular-progressbar/dist/styles.css';

import Slider from 'react-slick';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import $ from 'jquery';
import EventCard from './subcomponents/EventCard';
import { View, ViewContainer } from './subcomponents/View';
import Global from '../Global';
import styled from 'styled-components';

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

export default class ViewEvents extends React.Component<any,{activeCircleIndex:number}> {

    state = {
        activeCircleIndex: 0,
    };

    // counter:number = 0;
    // startTime:number = Date.now();
    // activeSlide:number = 0;
    // listCircleProgresses: Map<number,any> = new Map();

    shouldComponentUpdate(newProps:any, newState:any) {
        return true;
    }

    render() {
        // this.counter = Date.now() - this.startTime;
        // let percent = this.counter/3000;

        // console.log(this.counter + "|" + percent);
        
        const settings = {
            infinite: true,
            dots: true,
            // centerMode: true,
            slidesToShow: Global.isMobile() ? 1 : 3,
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
                // console.log('beforeChange:' + current + "|" + next);
                // this.listCircleProgresses.get(current).setActived(false);
                // this.setState({activeCircleIndex: next});
            },
            afterChange: (current:number) =>{
                // console.log('afterChange:' + current);
                // this.listCircleProgresses.get(current).current.setActived(true);
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
            <EventCard key={index} url={process.env.PUBLIC_URL + cardDetails.url} shortTitle={cardDetails.title} description={cardDetails.description} />
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

    // componentDidUpdate() {
    //     $('.slick-track').css({
    //         'top': 'auto',
    //         'left': 'auto',
    //     });
    // }
};