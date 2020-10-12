import React from 'react';
import './../css/view-events.scss';
import 'slick-carousel/slick/slick.scss';
import 'slick-carousel/slick/slick-theme.scss';
import 'react-circular-progressbar/dist/styles.css';

import Slider from 'react-slick';
import { CircularProgressbar } from 'react-circular-progressbar';
import $ from 'jquery';
import EventCard from './subcomponents/EventCard';
import { View, ViewContainer } from './subcomponents/View';

export default class ViewEvents extends React.Component {

    counter:number = 0;
    startTime:number = Date.now();
    activeSlide:number = 0;

    shouldComponentUpdate(newProps:any, newState:any) {
        return true;
    }

    render() {
        this.counter = Date.now() - this.startTime;
        let percent = this.counter/3000;

        console.log(this.counter + "|" + percent);

        const settings = {
            infinite: true,
            dots: true,
            // centerMode: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            spped: 300,
            autoplay: true,
            autoplaySpeed: 3000,
            customPaging: (i:any) => (
                <div>
                    {
                        this.activeSlide === i 
                        ? <CircularProgressbar value={percent} maxValue={1} text={(i+1).toString().padStart(2)} />
                        : <CircularProgressbar value={0.0} maxValue={1} text={(i+1).toString().padStart(2)} />
                    }
                </div>
            ),
            beforeChange: (current:number, next:number) =>{},
            afterChange: (current:number) =>{
                this.activeSlide = current;
                this.startTime = Date.now();
                this.counter = 0;
                console.log("after change: " + this.activeSlide);
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
            <EventCard key={index} url={cardDetails.url} shortTitle={cardDetails.title} description={cardDetails.description} />
        ));

        return (
            <View className='-text-blue view-events'>
                <ViewContainer className='view-events-container'>
                    <div className='view-event-title'>
                        <h1 className='view-events-header'>Special Events & Promotional</h1>
                        <p className='view-event-description'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.</p>
                    </div>
                    <div className='events-slider-container'>
                        <Slider {...settings}>
                            {eventCards}
                        </Slider>
                    </div>
                </ViewContainer>
            </View>
        )
    }

    componentDidUpdate() {
        $('.slick-track').css({
            'top': 'auto',
            'left': 'auto',
        });
    }
};