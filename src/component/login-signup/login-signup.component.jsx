import React from 'react';
import styled from 'styled-components';
import {Container} from './login-signup.styles'
import { ReactComponent as  FacebookLogin } from '../../assets/facebook.svg';
import { ReactComponent as  InstagramLogin } from '../../assets/Insta.svg';
import { ReactComponent as  TwitterLogin } from '../../assets/Twitter.svg';
import InputField from '../input-field/input-field.component';
import CustomButton from '../custom-button/custom-button.component';


const Card = styled.div`
    position: relative;
    top: calc(90px);
    left: 50%;
    transform: translateX(-50%);
    width: 460px;
    height: 650px;
    background-color: #AC2727;

    h1 {
        color: white;
        font-weight: bold;
        font-size: 40px;
        margin-bottom: 30px;
    }
`;

const LoginServicesDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
`;

const LayoutDiv = styled.div`
    width: 300px;
    height: fit-content;
    text-align: center;
    position: relative;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        margin-top: 10px;
        margin-bottom: 20px;
        font-size: 17px;
        color: white;

    }
`;

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

class LoginSignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const field = e.target.name.toLowerCase();

        this.setState({
            ...this.state,
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <Container>
                <Card>
                    <LayoutDiv>
                        <h1>Log In</h1>
                        <LoginServicesDiv>
                            <FacebookLogin />
                            <TwitterLogin />
                            <InstagramLogin />
                        </LoginServicesDiv>
                        <p>or use your email</p>
                        <InputField label='Email' type='text' value={this.state.email} handleChange={this.handleChange} bottom="10px" />
                        <InputField label='Password' type='password' value={this.state.password} handleChange={this.handleChange} />
                        <Label align="right" margin="10px">Forgot password?</Label>
                        <CustomButton color="#EF4747" handleClick={this.handleSubmit} name="Submit" />
                        <Label align="center" margin="10px">Don't have an account? <span> Create New One</span></Label>
                    </LayoutDiv>
                </Card>
            </Container>
        )
    }
}

export default LoginSignUp;