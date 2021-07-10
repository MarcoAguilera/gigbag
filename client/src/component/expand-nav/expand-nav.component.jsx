import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './expand-nav.styles.scss';

const ExpandNav = ({open}) => (
    <div className={`expand-nav ${ open ? "expand-nav-open" : ""}`}>
        <ul>
            <li>
                x
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
);

export default ExpandNav;