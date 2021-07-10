import React from 'react';
import { ReactComponent as Icon } from '../../assets/check-mark-black-outline.svg';

import './checkbox.styles.scss';

const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

const CheckBox = ({genre, handleCheck, checked}) => {
    
    return (
        <div className='checkbox'>
            <span className='input'>
                {
                    checked ? 
                    <input type='checkbox' name={genre} onChange={handleCheck} checked />
                    :
                    <input type='checkbox' name={genre} onChange={handleCheck} />
                }
                <span className='control'>
                    <Icon className='icon' fill='currentColor'/>
                </span>
            </span>

            <span className='genre'>{capitalize(genre)}</span>
        </div>
    )
};

export default CheckBox;