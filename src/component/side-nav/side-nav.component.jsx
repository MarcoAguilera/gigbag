import React from 'react';
import { ReactComponent as ReactLogo } from '../../assets/menu-icon.svg';
import './side-nav.styles.scss';

const SideNav = ({handleNavClick}) => (
    <div 
    className='side-nav'
    // style={{
    //     gridColumn: gridCol
    // }}
    >
        <ReactLogo onClick={handleNavClick} className='nav-icon'/>
    </div>
);

export default SideNav;