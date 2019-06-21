import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { NavbarWrapper, Title } from "../Header/Navbar";
import { Button, StyledWelcomeBody } from "../WelcomePage/WelcomeBody";
import { logoutUser } from "../../actions/authActions";
import { WelcomeDiv } from "./DashStyles";

class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const { user } = this.props.auth;
        console.log(user);

        return (
            <div>
                <NavbarWrapper>
                    <Title to="/">
                        <h1>Login</h1>
                    </Title>
                </NavbarWrapper>

                <StyledWelcomeBody>
                    <WelcomeDiv>
                        <h1>Hello, {user.firstName}. Welcome to Matcha</h1>
                        <p>Click below to get started</p>
                    </WelcomeDiv>

                    <Button>Click here to get started</Button>
                    <Button onClick={this.onLogoutClick}>
                        Click here to logout
                    </Button>
                </StyledWelcomeBody>
            </div>
        );
    }
}
Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);
