import React from 'react';
import './homepage.styles.scss';
import SideNav from '../../component/side-nav/side-nav.component';
import InnerTile from '../../component/inner-tile/inner-tile.component';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import About from './about/about.component';

const HomePage = () => (
    <div className='home'>
        <Logo className='logo' />
        <div className='overlay'>
            <SideNav grid={{
                gridCol: 1
            }}/>
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
            <About />
        </div>
    </div>
);

export default HomePage;