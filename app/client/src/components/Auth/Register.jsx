import React from "react";
import { NavbarWrapper, Title } from "../Header/Navbar";
import { Button, StyledWelcomeBody } from "../WelcomePage/WelcomeBody";
import { FormDiv, NameDiv, Input, NameInputDiv, InputDiv } from "./FormStyles";

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        console.log(newUser);
    };

    render() {
        const { errors } = this.state;

        return (
            <div>
                <NavbarWrapper>
                    <Title to="/">
                        <h1>Register</h1>
                    </Title>
                </NavbarWrapper>
                <StyledWelcomeBody>
                    <FormDiv>
                        <form noValidate onSubmit={this.onSubmit}>
                            <NameDiv>
                                <NameInputDiv>
                                    <Input
                                        onChange={this.onChange}
                                        value={this.state.firstName}
                                        error={errors.firstName}
                                        placeholder="First Name"
                                        id="firstName"
                                        type="text"
                                    />
                                </NameInputDiv>
                                <NameInputDiv>
                                    <Input
                                        onChange={this.onChange}
                                        value={this.state.lastName}
                                        error={errors.lastName}
                                        placeholder="Last Name"
                                        id="lastName"
                                        type="text"
                                    />
                                </NameInputDiv>
                            </NameDiv>
                            <InputDiv>
                                <Input
                                    onChange={this.onChange}
                                    value={this.state.username}
                                    error={errors.username}
                                    placeholder="Username"
                                    id="username"
                                    type="text"
                                />
                            </InputDiv>
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
                                <Input
                                    onChange={this.onChange}
                                    value={this.state.password2}
                                    error={errors.password2}
                                    placeholder="Confirm Password"
                                    id="password2"
                                    type="password"
                                />
                            </InputDiv>
                            <InputDiv>
                                <Button type="submit">Sign Up!</Button>
                            </InputDiv>
                        </form>
                    </FormDiv>
                </StyledWelcomeBody>
            </div>
        );
    }
}

export default Register;
