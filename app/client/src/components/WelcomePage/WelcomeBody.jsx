import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../routes/Routes";
import { StyledWelcomeBody, Button } from "../../styles/CoreStyles/Theme";
class WelcomeBody extends React.Component {
    // ### Need to prevent access to this page if logged in
    // componentDidMount() {
    //     // If logged in and user navigates to Register page, should redirect them to dashboard
    //     if (this.state.auth.isAuthenticated) {
    //         this.state.history.push("/dashboard");
    //     }
    // }

    render() {
        return (
            <StyledWelcomeBody>
                <Link to="/login">
                    <Button type="button">Login</Button>
                </Link>

                <Link to="/register">
                    <Button>Register</Button>
                </Link>
                {Routes}
            </StyledWelcomeBody>
        );
    }
}

export default WelcomeBody;
