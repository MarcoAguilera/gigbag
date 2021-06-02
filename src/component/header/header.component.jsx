import React from 'react';
import SideNav from '../../component/side-nav/side-nav.component';
import ExpandNav from '../expand-nav/expand-nav.component';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {navOpen: false};
        this.handleNavClick = this.handleNavClick.bind(this);
    }

    handleNavClick() {
        this.setState(prevState => ({
            navOpen: !prevState.navOpen
        }));
    }

    render() {
        return (
            <>
                <Logo className='logo' />
                <ExpandNav open={this.state.navOpen ? true : false}/>
                <SideNav handleNavClick={this.handleNavClick} />
            </>
        )
    }
}

export default Header;