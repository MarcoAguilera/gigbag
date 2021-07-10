import React from 'react';
import InnerTile from '../../../component/inner-tile/inner-tile.component';
import InfoCard from '../../../component/info-card/info-card.component';
import './about.styles.scss';

const AboutSection = () => {

    return (
        <>
            <InnerTile 
                backgroundImg="../../../assets/accordion.png"
                grid={{ gridCol: 2, gridRow: 3 }}
            />
            <InnerTile grid={{ gridCol: 3, gridRow: 3 }} >
                <InfoCard 
                heading={"What is gigbag?"} 
                body={"A booking solution for both muscicians and people looking to hire for their next gathering"} 

                />
            </InnerTile>
            <InnerTile grid={{ gridCol: 2, gridRow: 4 }} >
                <InfoCard 
                heading={"Why choose us?"}
                body={"Handling requests through Instagram and Facebook is tedious work. We’ve built gigbag to relieve you of that headache, and in the process getting you more clients"}
                
                />
            </InnerTile>
            <InnerTile 
                backgroundImg="../../../assets/mariachi.png"
                grid={{ gridCol: 3, gridRow:4 }}
            />
        </>
    )
};

export default AboutSection;