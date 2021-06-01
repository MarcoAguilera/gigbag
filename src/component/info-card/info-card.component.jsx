import React from 'react';
import './info-card.styles.scss';

const InfoCard = ({heading, body}) => (
    <div className='info-card'>
        <div className='background'></div>
        <div className='info'>
            <h1>{heading}</h1>
            <hr></hr>
            <p>{body}</p>
        </div>
    </div>
);

export default InfoCard;