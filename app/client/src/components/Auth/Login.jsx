import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

import { NavbarWrapper, Title } from "../../styles/NavStyles/Navbar.jsx";
import { Button, StyledWelcomeBody } from "../../styles/CoreStyles/Theme";
import {
    Input,
    LoginFormDiv,
    InputDiv
} from "../../styles/FormStyles/FormStyles";

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard"); // push user to dashboard when they login
        }
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
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(userData);
        this.props.loginUser(userData);
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
                                    className={classnames("", {
                                        invalid:
                                            errors.email || errors.emailnotfound
                                    })}
                                />
                                <span className="red-text">
                                    {errors.email}
                                    {errors.emailnotfound}
                                </span>
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
                                        invalid:
                                            errors.password ||
                                            errors.passwordincorrect
                                    })}
                                />
                                <span className="red-text">
                                    {errors.password}
                                    {errors.passwordincorrect}
                                </span>
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

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { loginUser }
)(Login);
