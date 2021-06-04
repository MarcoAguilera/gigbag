import React from 'react';
import styled from 'styled-components';
import {Container} from './login-signup.styles'
import { ReactComponent as  Facebook } from '../../assets/facebook.svg';
import { ReactComponent as  Instagram } from '../../assets/Insta.svg';
import { ReactComponent as  Twitter } from '../../assets/Twitter.svg';
import InputField from '../input-field/input-field.component';


const Card = styled.div`
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

const LoginServicesDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const LayoutDiv = styled.div`
    width: 300px;
    height: fit-content;
    background-color: green;
    text-align: center;
    position: relative;
    top: 50%;
    left: 50%;
    transform:translate(-50%, -50%);

    p {
        font-size: 19px;
        color: white;
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

    render() {
        return (
            <Container>
                <Card>
                    <LayoutDiv>
                        <h1>Log In</h1>
                        <LoginServicesDiv>
                            <Facebook />
                            <Twitter />
                            <Instagram />
                        </LoginServicesDiv>
                        <p>or use your email</p>
                        <InputField label='Email' type='text' value={this.state.email} handleChange={this.handleChange} />
                        <InputField label='Password' type='password' value={this.state.password} handleChange={this.handleChange} />
                    </LayoutDiv>
                </Card>
            </Container>
        )
    }
}

export default LoginSignUp;