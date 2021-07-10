import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../assets/back-arrow.svg';

const Container = styled.div`
    position: absolute;
    left: 20px;
    top: 20px;
    border: 3px solid white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
    transition: all .1s linear;

    &:hover {
        transform: scale(1.1);
    }

    * {
        width: 30px;
    }
`; 

const BackArrow = ({handleBackClick}) => (
    <Container onClick={handleBackClick} >
        <Arrow />
    </Container>
);

export default BackArrow;