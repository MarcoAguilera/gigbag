import React from 'react';
import './group-card.styles.scss';

const GroupCard = ({ name, p_range, genres, imageUrl }) => {
    console.log(name);
    return (
        <div
        className='group-card' 
        style={{
            backgroundImage: `url("${imageUrl}")`
        }}>

        </div>
    )
};

export default GroupCard;