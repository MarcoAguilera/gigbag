import React from 'react';
import './inner-tile.styles.scss';

const InnerTile = ({ children, backgroundImg, grid: {gridCol, gridRow}, bottom }) => (
    <div 
        className='inner-tile'
        style={{
            backgroundImage: `url("${backgroundImg}")`,
            gridColumn: gridCol / 1,
            gridRow: gridRow / 1,
            borderBottom: bottom  
        }}
    >
        {children}
    </div>
);

export default InnerTile;