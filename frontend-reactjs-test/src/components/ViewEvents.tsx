import React from 'react';

import './../css/view-events.scss';

export default class ViewEvents extends React.Component {
    render() {
        return (
            <div className='full-viewport view-container -text-blue view-events'>
                <div className='view-content-max-width view-content-container view-events-container'>
                    <h1 className='view-events-header'>Special Events & Promotional</h1>
                    <p className='view-event-description'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.</p>
                </div>
            </div>
        )
    }
};