import React from 'react';

interface ButtonState {
    hover: boolean,
}

interface ButtonProps {
    onClick?: Function,
    text?: string,
}

export default class Button extends React.Component<ButtonProps,ButtonState> {
    constructor(props:ButtonProps) {
        super(props);
        this.state = {hover: false};
        this.toggleHover = this.toggleHover.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    toggleHover() {
        this.setState({hover: !this.state.hover});
    }

    handleClick(event:any) {
        this.props.onClick && this.props.onClick.apply(event);
    }

    render() {
        const styles = {
            buttonStyle: {
                border: `2px solid ${this.state.hover ? '#2699FB' : 'white'}`,
                backgroundColor: `${this.state.hover ? '#2699FB' : 'white'}`,
                color: 'white',
                alignItems: 'center',
            }
        };
        return (
            <button onClick={this.handleClick} 
                    style={styles.buttonStyle} 
                    onMouseEnter={this.toggleHover} 
                    onMouseLeave={this.toggleHover}>
                {this.props.text}
            </button>
        )
    }
}