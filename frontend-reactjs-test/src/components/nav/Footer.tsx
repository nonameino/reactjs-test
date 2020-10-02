import React from 'react';
import circle from './../../data/circle.png';
import share from './../../data/share_3.png';
import mail from './../../data/mail.png';
import support from './../../data/support.png';

interface FooterProps {
    color?: string,
}

export default class Footer extends React.Component<FooterProps> {
    render() {
        const styles = {
            footer: {
                position: 'absolute' as 'absolute',
                bottom: 0,
                width: '100%',
                marginTop: '1rem',
                display:'flex',
                flexDirection:'column' as 'column',
                justifyContent:'center',
                alignItems:'flex-end',
                color: this.props.color,
            },
            container: {
                position: 'relative' as 'relative',
            },
            imgOver: {
                position: 'absolute' as 'absolute',
            }
        }

          return (
              <div style={styles.footer} className="sticky">
                  {/* <div> */}
                    <div style={styles.container}>
                        <img src={circle} alt="" />
                        <img src={share} alt=""/>
                    </div>
                    <div style={styles.container}>
                        <img src={circle} alt="" />
                        <img src={mail} alt=""/>
                    </div>
                    <div style={styles.container}>
                        <img src={circle} alt="" />
                        <img src={support} alt=""/>
                    </div>
                  {/* </div> */}
              </div>
          )
    }
}