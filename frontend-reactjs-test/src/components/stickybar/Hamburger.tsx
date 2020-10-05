import React from 'react';

interface HamburgerState {
    open?: boolean,
    color?: string,
}

interface HamburgerProps {
    open?: boolean,
    color?: string,
    onClick?: any,
}

export default class Hamburger extends React.Component<HamburgerProps,HamburgerState> {
    constructor(props:HamburgerProps) {
        super(props);
        this.state = {
            open: this.props.open ? this.props.open : false,
            color: this.props.color ? this.props.color : "black",
        };

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({open: !this.state.open});
    }
    render() {
        const styles = {
            container: {
                height: '32px',
                width: '32px',
                display:'flex',
                flexDirection: 'column' as 'column',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                padding: '4px',
                marginRight: '15px',
            },
            line: {
                height: '2px',
                width: '20px',
                background: this.state.color,
                transition: 'all 0.2s ease',
            },
            lineTop: {
                transform: this.state.open ? 'rotate(45deg)':'none',
                transformOrigin: 'top left',
                marginBottom: '5px',
            },
            lineMiddle: {
                opacity: this.state.open ? 0: 1,
                transform: this.state.open ? 'translateX(-16px)':'none',
            },
            lineBottom: {
                transform: this.state.open ? 'translateX(-1px) rotate(-45deg)':'none',
                transformOrigin: 'top left',
                marginTop: '5px',
            },
        }
        return (
            <div style={styles.container} 
                onClick={this.props.onClick ? this.props.onClick : this.handleClick}>
                <div style={{...styles.line, ...styles.lineTop}} />
                <div style={{...styles.line, ...styles.lineMiddle}} />
                <div style={{...styles.line, ...styles.lineBottom}} />
            </div>
        );
    }
}