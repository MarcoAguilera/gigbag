import styled from 'styled-components';
import img from '../../assets/pexels-los-muertos-crew-7772341.jpg';

export const Container = styled.div`
    background-image: url(${img});
    background-size: cover;
    position: relative;
    width: 100vw;
    min-height: 100vh;
    max-height: fit-content;
    overflow-x: hidden;
`;

export const Card = styled.div`
    position: relative;
    top: calc(90px);
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    height: 650px;
    background-color: #AC2727;

    h1 {
        color: white;
        font-weight: bold;
        font-size: 40px;
    }
`;