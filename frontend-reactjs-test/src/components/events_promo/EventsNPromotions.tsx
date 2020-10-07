import React from 'react';
import Slider from 'react-slick';
import './events-promotionals.scss';
import cardBGBlack from './../../data/sliderbgblack.png';
import Icon from '../Icon';
import ShareImg from './../../data/share_1.png';
import ShareHoverImg from './../../data/share_2.png';

import cardBGBlacsk from './../../../public/sliderbg.png';

const PromotionalCard = (props:{img:string, title:string, details:string}, onReadMore?:Function)=>{
    return (
        <div className='promo-card'>
            <img id='card-banner' src={props.img} alt='card-banner' />
            <img id='card-placeholder' src={cardBGBlack} alt='card-placeholder' />
            <div>
                <h1>{props.title}</h1>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ...</p>
                <Icon src={ShareImg} hover={ShareHoverImg} />
            </div>
        </div>
    );
}

const EventsNPromotions = ()=>{

    const promoDetails = [
        {
            img: 'public/sliderbg.png',
            title: 'SHORT TITLE HERE',
            details: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ...',
        },
        {
            img: 'public/sliderbg.png',
            title: 'SHORT TITLE HERE',
            details: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ...',
        },
        {
            img: 'public/sliderbg.png',
            title: 'SHORT TITLE HERE',
            details: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ...',
        },
        {
            img: 'public/sliderbg.png',
            title: 'SHORT TITLE HERE',
            details: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ...',
        },
        {
            img: 'public/sliderbg.png',
            title: 'SHORT TITLE HERE',
            details: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ...',
        }
    ];

    const promoCards = promoDetails.map(promo=>
        <div>
            <PromotionalCard img={promo.img} title={promo.title} details={promo.details} />
        </div>);

    const sliderSettings = {
        dots: true,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };
    return (
        <div className='events-promotionals'>
            <div>
                <h1>Special Events & Promotional</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.</p>
            </div>
            <Slider {...sliderSettings}>
                {promoCards}
            </Slider>
        </div>
    );
};

export default EventsNPromotions;