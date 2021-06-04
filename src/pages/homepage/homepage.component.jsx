import React from 'react';
import './homepage.styles.scss';
import SideNav from '../../component/side-nav/side-nav.component';
import LandingSection from '../landing/landing.component';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import AboutSection from './about/about.component';
import ExpandNav from '../../component/expand-nav/expand-nav.component';

const HomePage = () => {
    return (
        <div className='home'>
            <div className='overlay'>
                <LandingSection />
                <AboutSection />
            </div>
        </div>
    )
};

export default HomePage;