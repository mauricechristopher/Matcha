import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

import { NavbarWrapper, Title } from "../../styles/NavStyles/Navbar.jsx";
import { Button, StyledWelcomeBody } from "../../styles/CoreStyles/Theme";
import {
    FormDiv,
    NameDiv,
    Input,
    NameInputDiv,
    InputDiv
} from "../../styles/FormStyles/FormStyles";

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

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
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
        this.props.registerUser(newUser, this.props.history);
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
                                        className={classnames("", {
                                            invalid: errors.firstName
                                        })}
                                    />
                                    <span className="red-text">
                                        {errors.firstName}
                                    </span>
                                </NameInputDiv>
                                <NameInputDiv>
                                    <Input
                                        onChange={this.onChange}
                                        value={this.state.lastName}
                                        error={errors.lastName}
                                        placeholder="Last Name"
                                        id="lastName"
                                        type="text"
                                        className={classnames("", {
                                            invalid: errors.lastName
                                        })}
                                    />
                                    <span className="red-text">
                                        {errors.lastName}
                                    </span>
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
                                    className={classnames("", {
                                        invalid: errors.username
                                    })}
                                />
                                <span className="red-text">
                                    {errors.username}
                                </span>
                            </InputDiv>
                            <InputDiv>
                                <Input
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    placeholder="Email"
                                    id="email"
                                    type="email"
                                    className={classnames("", {
                                        invalid: errors.email
                                    })}
                                />
                                <span className="red-text">{errors.email}</span>
                            </InputDiv>
                            <InputDiv>
                                <Input
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    placeholder="Password"
                                    id="password"
                                    type="password"
                                    className={classnames("", {
                                        invalid: errors.password
                                    })}
                                />
                                <span className="red-text">
                                    {errors.password}
                                </span>
                            </InputDiv>
                            <InputDiv>
                                <Input
                                    onChange={this.onChange}
                                    value={this.state.password2}
                                    error={errors.password2}
                                    placeholder="Confirm Password"
                                    id="password2"
                                    type="password"
                                    className={classnames("", {
                                        invalid: errors.password2
                                    })}
                                />
                                <span className="red-text">
                                    {errors.password2}
                                </span>
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

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));
