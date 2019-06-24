import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { NavbarWrapper, Title } from "../../styles/NavStyles/Navbar.jsx";
import { Button, StyledWelcomeBody } from "../../styles/CoreStyles/Theme";
import { logoutUser } from "../../actions/authActions";
import {
    WelcomeDiv,
    WelcomeText,
    WelcomeTitle,
    GetStartedButton
} from "../../styles/DashStyles/DashStyles";

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
                        <h1>Matcha</h1>
                    </Title>

                    <Button onClick={this.onLogoutClick}>
                        Click here to logout
                    </Button>
                </NavbarWrapper>

                <StyledWelcomeBody>
                    <WelcomeDiv>
                        <WelcomeTitle>Hello, {user.firstName}</WelcomeTitle>
                        <WelcomeText>Welcome to Matcha</WelcomeText>
                        <GetStartedButton>
                            Click here to get started
                        </GetStartedButton>
                    </WelcomeDiv>
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
