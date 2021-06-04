import React from 'react';
import styled from 'styled-components';
import { ReactComponent as  FacebookLogin } from '../../assets/facebook.svg';
import { ReactComponent as  InstagramLogin } from '../../assets/Insta.svg';
import { ReactComponent as  TwitterLogin } from '../../assets/Twitter.svg';

const LoginServicesDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
`;

const LoginServices = () => {
    return (
        <LoginServicesDiv>
            <FacebookLogin />
            <TwitterLogin />
            <InstagramLogin />
        </LoginServicesDiv>
    )
}

export default LoginServices;