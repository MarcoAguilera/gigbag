import React from 'react';
import styled from 'styled-components';
import InputField from '../../../component/input-field/input-field.component';
import CustomButton from '../../../component/custom-button/custom-button.component';
import LoginServices from '../../../component/login-services/login-services.component';
import { LayoutDiv } from '../../../component/layout-div/layout-div.styles';

const Label = styled.label`
    font-family: inherit;
    color: white;
    font-size: 11px;
    display: block;
    text-align: ${props => props.align};
    margin-top: ${props => props.margin};
    margin-bottom: 10px;
    width: 88%;

    span {
        color: #2350d2;
        text-decoration: underline;
    }
`;

const Base = ({email, handleChange, password, handleSubmit, handleCreateAccount}) => {
    return (
        <LayoutDiv>
            <h1>Log In</h1>
            <LoginServices />
            <p>or use your email</p>
            <InputField label='Email' type='text' value={email} handleChange={handleChange} bottom="10px" />
            <InputField label='Password' type='password' value={password} handleChange={handleChange} />
            <Label align="right" margin="10px">Forgot password?</Label>
            <CustomButton color="#EF4747" handleClick={handleSubmit} name="Submit" />
            <Label align="center" margin="10px">Don't have an account? <span onClick={handleCreateAccount}> Create New One</span></Label>
        </LayoutDiv>
    );
}

export default Base;