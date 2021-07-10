import React from 'react';
import LoginServices from '../../../component/login-services/login-services.component';
import InputField from '../../../component/input-field/input-field.component';
import CustomButton from '../../../component/custom-button/custom-button.component';
import { LayoutDiv } from '../../../component/layout-div/layout-div.styles';


const SignUp = ({accountType, handleChange, email, password, confirm}) => {
    return (
        <LayoutDiv>
            <h1>Sign Up</h1>
            <LoginServices />
            <p>or use your email</p>
            <InputField label="Email" type="text" value={email} bottom="10px" handleChange={handleChange} />
            <InputField label="Password" type="password" value={password} bottom="10px" handleChange={handleChange} />
            <InputField label="Confirm Password" type="password" value={confirm} handleChange={handleChange} bottom="20px" />
            <CustomButton name="Submit" handleClick={null} color="#EF4747" />
        </LayoutDiv>
    )
}

export default SignUp;