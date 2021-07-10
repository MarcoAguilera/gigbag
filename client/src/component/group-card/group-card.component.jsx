import React from 'react';
import { ReactComponent as PriceOne } from '../../assets/p_range/p_range-1.svg';
import { ReactComponent as PriceTwo } from '../../assets/p_range/p_range-2.svg';
import { ReactComponent as PriceThree } from '../../assets/p_range/p_range-3.svg';
import './group-card.styles.scss';

let priceTag = new Map();

priceTag.set(1, <PriceOne />);
priceTag.set(2, <PriceTwo />);
priceTag.set(3, <PriceThree />);

const createTag = (genres) => {
    var tag = "";
    var i = 0

    while(i < genres.length - 1) {
        tag += (genres[i] + ", ");
        i++;
    }

    tag += genres[i];

    return tag;
}

const GroupCard = ({name, p_range, genres, imageUrl}) => {
    return (
        <div className='group-card'
        style={{
            backgroundImage: `url("../../../assets/${imageUrl}")`
            }}
        >
            <div className='bottom'>
                <div className='left'>
                    <p className='name'>{ name }</p>
                    <p className='genre'>{ createTag(genres) }</p>
                </div>
                <div className='right'>
                    { priceTag.get(p_range) }
                </div>
            </div>
        </div>
    )
};

export default GroupCard;