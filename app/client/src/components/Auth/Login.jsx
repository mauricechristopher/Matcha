import React from "react";
import { NavbarWrapper, Title } from "../Header/Navbar";
import { Button, StyledWelcomeBody } from "../WelcomePage/WelcomeBody";

import { Input, LoginFormDiv, InputDiv } from "./FormStyles";

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(userData);
    };
    render() {
        const { errors } = this.state;

        return (
            <div>
                <NavbarWrapper>
                    <Title to="/">
                        <h1>Login</h1>
                    </Title>
                </NavbarWrapper>
                <StyledWelcomeBody>
                    <LoginFormDiv>
                        <form noValidate onSubmit={this.onSubmit}>
                            <InputDiv>
                                <Input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    placeholder="Email"
                                    id="email"
                                    type="email"
                                />
                            </InputDiv>
                            <InputDiv>
                                <Input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    placeholder="Password"
                                    id="password"
                                    type="password"
                                />
                            </InputDiv>
                            <InputDiv>
                                <Button type="submit">Login</Button>
                            </InputDiv>
                        </form>
                    </LoginFormDiv>
                </StyledWelcomeBody>
            </div>
        );
    }
}

export default Login;
