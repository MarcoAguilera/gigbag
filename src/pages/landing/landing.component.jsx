import React from 'react';
import InnerTile from '../../component/inner-tile/inner-tile.component';
import './landing.styles.scss';

const LandingSection = () => {
    return (
        <>
            <InnerTile 
                backgroundImg={"none"} 
                grid={{ gridCol: 2, gridRow: 1 }}
                bottom=".5px solid #d4d4d47c"
            >   
                <div className='heading-container'>
                    <h1 className='title'>Connecting <h2 className='title add-stroke' style={{color: '#EF4747'}}>Regional Mexican</h2> Musicians and Clients</h1>
                </div>
            </InnerTile>
            <InnerTile 
                backgroundImg={"none"} 
                grid={{ gridCol: 3, gridRow: 1 }}
                bottom=".5px solid #d4d4d47c"
            />
            <InnerTile 
                backgroundImg={"none"} 
                grid={{ gridCol: 2, gridRow: 2 }}
            />
            <InnerTile 
                backgroundImg={"none"} 
                grid={{ gridCol: 3, gridRow: 2 }}
            />
        </>
    )
};

export default LandingSection;