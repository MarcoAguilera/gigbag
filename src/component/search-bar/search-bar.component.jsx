import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';

import './search-bar.styles.scss';

const SearchBar = ({value, handleQuery}) => (
    <div className='search-bar'>
        <div className='input-div'>
            <SearchIcon className='icon' />
            <input className='input' type='text' value={value} onChange={handleQuery} placeholder="Looking for a specific group?" />
        </div>
    </div>
);

export default SearchBar;