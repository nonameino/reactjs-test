import React from 'react';

interface IconProps {
    src: string,
    hover: string,
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
            <div className='icon-container' onMouseLeave={this.toggleHover} onMouseEnter={this.toggleHover}>
                <div />
                <img src={this.state.hover ? this.props.hover : this.props.src} alt='icon' />
            </div>
        );
    }
}