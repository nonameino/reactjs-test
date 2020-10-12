import React from 'react';
import './../../css/icon.scss';

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
                <div className='icon-container' onMouseLeave={this.toggleHover} onMouseEnter={this.toggleHover}>
                    {this.state.hover ? <div className='icon-highlight-bg' /> : null}
                    <div className='icon-content'>
                        <img className='icon-img' src={this.state.hover ? this.props.hoverSrc : this.props.src} alt='icon' />
                    </div>
                </div>
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