import React from 'react';
import BG from '../../data/sliderbgblack.png';
import Button from './Button';
import Icon from './Icon';
import ShareImg from '../../data/share_1.png';
import ShareImgHover from '../../data/share_2.png';
import styled from 'styled-components';

const CardContent = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding: 15px;
    h2 {
        width: 247px;
        font-size: 35px;
    }
    hr {
        width: 78px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .button-bound {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 20px 20px 35px 20px;
        button {
            margin-top: 50px;
            position: relative;
            display: block;
            width: 100%;
        }
    }
    
    :hover {
        justify-content: flex-start;
    }

    @media screen and (max-width: 768px) {
        h2 {
            width: 148px;
            font-size: 21px;
        }
        p {
            font-size: 10px;
        }
        .button-bound {
            button {
                height: 50px;
                font-size: 12px;
            }
        }
    }
`;

interface EventCardState {
    hover: boolean,
}

interface EventCardProps {
    url?: string,
    shortTitle?: string,
    description?: string,
    cardWidth?:number,
    width: number,
    height: number,
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
            bound: {
                display: 'flex',
                // flexDirection: 'column' as 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
            },
            container: {
                position: 'relative' as 'relative',
                // backgroundImage: `url(${this.props.url})`,
                width: this.state.hover ? this.props.width * 1.05 : this.props.width,
                height: this.state.hover ? this.props.height * 1.05 : this.props.height,
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
            icon: {
                position: 'absolute' as 'absolute',
                right: '25px',
                top: '25px',
            }
        }
        return (
            <div style={styles.bound}>
                <div style={styles.container} 
                    onMouseEnter={this.triggerHover} 
                    onMouseLeave={this.triggerHover}>
                    <img src={this.props.url} alt='bg' style={styles.bg} />
                    <img src={BG} alt='bg-black' style={styles.blackBg}/>
                    <CardContent>
                        <h2>{this.props.shortTitle}</h2>
                        {this.state.hover ? (
                            <>
                                <hr/>
                                <p>{this.props.description}</p>
                                <div className='button-bound'>
                                    <Button>READ MORE</Button>
                                </div>
                                <Icon style={styles.icon} src={ShareImg} hoverSrc={ShareImgHover} />
                            </>
                        ) : null}
                    </CardContent>
                </div>
            </div>
        );
    }
}