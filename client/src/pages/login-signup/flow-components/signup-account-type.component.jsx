import React from 'react';
import styled from 'styled-components';

import CustomButton from '../../../component/custom-button/custom-button.component';

const Container = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;

    p {
        position: relative;
        top: -30px;
        color: white;
        font-weight: bold;
        font-size: 40px;
    }
`;

const ButtonsContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    top: -50px;
`;

const SignUpAccountType = ({handleAccountType}) => {
    return (
        <Container>
            <h1>Sign Up</h1>
            <p>Are you a muscician/group looking to join gigbag?</p>
            <ButtonsContainer>
                <CustomButton name={"Yes"} color={"#9A2E2E"} width="200px" handleClick={() => handleAccountType('Muscician')} />
                <CustomButton name={"No"} color={"#EF4747"} width="200px" handleClick={() => handleAccountType('Client')} />
            </ButtonsContainer>
        </Container>
    );
};

export default SignUpAccountType;