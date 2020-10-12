import React from 'react';
import BG from '../../data/sliderbgblack.png';
import Button from './Button';
import Icon from './Icon';
import ShareImg from '../../data/share_1.png';
import ShareImgHover from '../../data/share_2.png';

interface EventCardState {
    hover: boolean,
}

interface EventCardProps {
    url?: string,
    shortTitle?: string,
    description?: string,
}

export default class EventCard extends React.Component<EventCardProps, EventCardState> {
    constructor(props:EventCardProps) {
        super(props);
        this.state = {
            hover: false,
        }
        this.triggerHover = this.triggerHover.bind(this);
    }

    triggerHover() {
        this.setState({hover: !this.state.hover});
    }

    render() {
        const styles = {
            container: {
                position: 'relative' as 'relative',
                // backgroundImage: `url(${this.props.url})`,
                width: this.state.hover ? '437' : '401px',
                height: this.state.hover ? '599px' : '531px',
                color: 'white',
            },
            bg: {
                position: 'absolute' as 'absolute',
                left: '0',
                top: '0',
                width: 'inherit',
                height: 'inherit',
            },
            blackBg: {
                position: 'absolute' as 'absolute',
                left: '0',
                bottom: '0',
                width: '100%',
            },
            content: {
                position: 'relative' as 'relative',
                padding: '25px',
                height: '100%',
            },
            shortTitleBottom: {
                position: 'absolute' as 'absolute',
                width: '247px',
                fontSize: '35px',
                marginLeft: '25px',
                marginBottom: '20px',
                left: '0',
                bottom: '0',
            },
            shortTitleTop: {
                position: 'relative' as 'relative',
                width: '247px',
                fontSize: '35px',
                left: '0',
                top: '0',
            },
            hrSize : {
                width: '78px',
                marginTop: '10px',
                marginBottom: '10px',
            },
            button: {
                position: 'absolute' as 'absolute',
                width: '354px',
                left: '25px',
                bottom: '50px',
            },
            icon: {
                position: 'absolute' as 'absolute',
                right: '25px',
                top: '25px',
            }
        }
        return (
            <div style={styles.container} onMouseEnter={this.triggerHover} onMouseLeave={this.triggerHover}>
                <img src={this.props.url} alt='bg' style={styles.bg} />
                <img src={BG} alt='bg-black' style={styles.blackBg}/>
                <div style={styles.content}>
                    <h2 style={this.state.hover ? styles.shortTitleTop : styles.shortTitleBottom}>{this.props.shortTitle}</h2>
                    {this.state.hover ? (
                        <>
                            <hr style={styles.hrSize} />
                            <p>{this.props.description}</p>
                            <Button style={styles.button}>READ MORE</Button>
                            <Icon style={styles.icon} src={ShareImg} hoverSrc={ShareImgHover} />
                        </>
                    ) : null}
                </div>
            </div>
        );
    }
}