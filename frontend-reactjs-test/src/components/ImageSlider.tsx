import React from 'react';
import './components.css'
import Slider from 'react-slick';
import sliderIng from './../data/slider.png';


export default class ImageSlider extends React.Component {
    render() {
        const images:{img:string}[] = [
            {img: sliderIng},
            {img: sliderIng},
            {img: sliderIng},
            {img: sliderIng},
            {img: sliderIng},
        ];
        const imgSliders = images.map(img=>
            (
                <div>
                    <div style={{width: '100%', height: '30px', backgroundColor: 'red' }}></div>
                </div>
            )
        );
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
          return (
            <div>
              <h2> Single Item</h2>
              <Slider {...settings}>
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
                <div>
                  <h3>5</h3>
                </div>
                <div>
                  <h3>6</h3>
                </div>
              </Slider>
            </div>
          );
    }
}