import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.div`
    position: relative;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    /* :hover {
        background-color: #DDD;
    } */
`;

const IconContent = styled.div`
    background-color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
`;

const IconHighlight = styled.div`
    position: absolute;
    background-color: white;
    opacity: 0.36;
    border-radius: 50%;
    width: inherit;
    height: inherit;
    top: 0;
    left: 0;
`;

interface IconProps {
    src: string,
    hoverSrc: string,
    style?:any,
}

interface IconState {
    hover: boolean;
}

export default class Icon extends React.Component<IconProps,IconState> {
    constructor(props:IconProps) {
        super(props);
        this.state = {hover: false};
        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleHover() {
        this.setState({hover: !this.state.hover});
    }

    render() {
        return (
            <div style={this.props.style}>
                <IconContainer onMouseLeave={this.toggleHover} onMouseEnter={this.toggleHover}>
                    {this.state.hover ? <IconHighlight /> : null}
                    <IconContent>
                        <img className='icon-img' src={this.state.hover ? this.props.hoverSrc : this.props.src} alt='icon' />
                    </IconContent>
                </IconContainer>
            </div>
        );
    }
}



// const Icon:any = styled.div`
//     position: relative;
//     background-color: transparent;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 40px;
//     height: 40px;
// `