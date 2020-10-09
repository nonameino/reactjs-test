import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './events-promotionals.scss';
import Slider from 'react-slick';
import cardBGBlack from './../../data/sliderbgblack.png';
import Icon from '../subcomponents/Icon';
import ShareImg from './../../data/share_1.png';
import ShareHoverImg from './../../data/share_2.png';

const PromotionalCard = (props:{img:string, title:string, details:string}, onReadMore?:Function)=>{
    const styles = {
        promoCard: {
            backgroundImage: `url(${props.img})`,
            width: '401px',
            height: '531px',
        },
        
    }
    return (
        <div className='promo-card' style={styles.promoCard}>
            <img id='promo-card-placeholder' src={cardBGBlack} alt='promo-card-placeholder' />
            <div id='promo-card-content'>
                <h1>{props.title}</h1>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ...</p>
                <Icon src={ShareImg} hoverSrc={ShareHoverImg} />
            </div>
        </div>
    );
}

const EventsNPromotions = ()=>{

    const promoDetails = [
        {
            img: '/images/sliderbg.png',
            title: 'SHORT TITLE HERE',
            details: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ...',
        },
        {
            img: '/images/sliderbg.png',
            title: 'SHORT TITLE HERE',
            details: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ...',
        },
        {
            img: '/images/sliderbg.png',
            title: 'SHORT TITLE HERE',
            details: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ...',
        },
        {
            img: '/images/sliderbg.png',
            title: 'SHORT TITLE HERE',
            details: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ...',
        },
        {
            img: '/images/sliderbg.png',
            title: 'SHORT TITLE HERE',
            details: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore ...',
        }
    ];

    const promoCards = promoDetails.map(promo=>
        <div>
            {/* <PromotionalCard img={promo.img} title={promo.title} details={promo.details} /> */}
            <h3>A</h3>
        </div>);

    const sliderSettings = {
        dots: true,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };
    // return (
    //     <div className='events-promotionals'>
    //         <div id='events-promos-header'>
    //             <h1>Special Events & Promotional</h1>
    //             <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
    //                 tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.</p>
    //         </div>
    //         <Slider {...sliderSettings}>
    //             {promoCards}
    //         </Slider>
    //     </div>
    // );
    return null;
};

export default EventsNPromotions;