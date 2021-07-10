import React from 'react';
import { Container, Card } from './login-signup.styles'
import Base from './flow-components/base.component';
import SignUpAccountType from './flow-components/signup-account-type.component';
import SignUp from './flow-components/signup.component';

class LoginSignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            confirm: '',
            accountType: '',
            flowstep: 1
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCreateAccount = this.handleCreateAccount.bind(this);
        this.handleAccountType = this.handleAccountType.bind(this);
    }

    handleChange(e) {
        const field = e.target.name.toLowerCase().split(" ");

        this.setState({
            ...this.state,
            [field[0]]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        alert('Submited');
    }

    handleCreateAccount(e) {
        this.setState({
            ...this.state,
            flowstep: 2
        });
    }

    handleAccountType(type) {
        this.setState({
            email: '',
            password: '',
            confirm: '',
            flowstep: 3,
            accountType: type
        });
    }

    render() {
        return (
            <Container>
                {
                    (this.state.flowstep) == 1 ?
                    <Card>
                        <Base 
                        email={this.state.email} 
                        password={this.state.password} 
                        handleSubmit={this.handleSubmit} 
                        handleChange={this.handleChange} 
                        handleCreateAccount={this.handleCreateAccount} />
                    </Card>  
                    : 
                    (this.state.flowstep) == 2 ? 
                    <Card>
                        <SignUpAccountType handleAccountType={this.handleAccountType} />
                    </Card> 
                    : (this.state.flowstep) == 3 ? 
                    <Card>
                        <SignUp 
                        accountType={this.state.accountType} 
                        handleChange={this.handleChange} 
                        email={this.state.email} 
                        password={this.state.password} 
                        confirm={this.state.confirm} 
                        />
                    </Card>
                    :
                    null
                }
            </Container>
        )
    }
}

export default LoginSignUp;