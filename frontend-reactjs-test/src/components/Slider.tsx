import React from 'react';

import './slider.scss';

interface SliderState {
    transorm: number,
    currentSlide: number,
    totalSlide: number,
    autoScrollTimer: number,
    showLeftArrow: boolean,
    showRightArrow: boolean,
}

interface SliderProps {
    autoScrollTimer?: number,
    children?:any,
    type?:string,
    pauseMouseEnter?:boolean,
    autoScroll?:boolean,
}

export default class Slider extends React.Component<SliderProps,SliderState> {

    carousel:React.RefObject<any>;
    carouselInnerContent:React.RefObject<any>;
    carouselTimer:number;

    constructor(props:any) {
        super(props);

        this.state = {
            transorm: 0,
            currentSlide: 0,
            totalSlide: 0,
            autoScrollTimer: this.props.autoScrollTimer || 5000,
            showLeftArrow: false,
            showRightArrow: true,
        }

        this.carouselTimer = -1;
        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
        this.clearTimer = this.clearTimer.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.arrowMaker = this.arrowMaker.bind(this);

        this.carousel = React.createRef();
        this.carouselInnerContent = React.createRef();
    }

    slideLeft() {}

    slideRight() {}

    clearTimer() {
        if (!this.props.pauseMouseEnter) {
            clearInterval(this.carouselTimer);
        }
    }

    startTimer() {
        if (this.props.autoScroll) {
            this.carouselTimer = setInterval(()=>{
                let containerWidth = this.carousel.current.offsetWidth;
                let carouselWidth = this.props.type === 'fullscreen'
                                    ? containerWidth * this.props.children.length
                                    : this.carouselInnerContent.current.offsetWidth;
                let totalSile = Math.ceil(carouselWidth / containerWidth);
                
                let currentSlide = this.state.currentSlide + 1;
                if (currentSlide >= totalSile) {
                    currentSlide = 0;
                }
                let tranform = 0;
                if (currentSlide * containerWidth + containerWidth > carouselWidth) {
                    let prevWidth = currentSlide * containerWidth;
                    tranform = prevWidth - ((currentSlide +1)*containerWidth - carouselWidth);
                }
            });
        }
    }

    arrowMaker() {}

    componentDidMount() {
        let containerWidth = this.carousel.current.offsetWidth;
        let carouselWidth = this.props.type === 'fullscreen'
                                ? containerWidth * this.props.children.length
                                : this.carouselInnerContent.current.offsetWidth;
        let totalSilde = Math.ceil(carouselWidth / containerWidth);
        this.setState({
            totalSlide: totalSilde,
        }, ()=>{this.startTimer()});
    }

    render() {
        return (
            <div ref={this.carousel}>

            </div>
        );
    }
}