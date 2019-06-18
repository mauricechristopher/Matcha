import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import { Routes } from "../../routes/Routes";

const StyledWelcomeBody = styled.div`
    height: 100%;
    width: 100%;
    /* top: 200px; */
    position: fixed;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(#50e2d1 21%, #00fa9a);
`;

const Button = styled.button`
    background: transparent;
    height: 84px;
    position: relative;
    width: 200px;
    border-radius: 3px;
    border: 2px solid #c884a6;
    color: #c884a6;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    font-size: 30px;
    cursor: pointer;
    &:hover {
        background: #c884a6;
        color: #ccd5ff;
        border: 2px solid #ccd5ff;
    }
    &:focus {
        background: #c884a6;
        color: #ccd5ff;
        border: 2px solid #ccd5ff;
        outline: none;
    }
`;

class WelcomeBody extends React.Component {
    render() {
        return (
            <Router>
                <StyledWelcomeBody>
                    <Link to="/login">
                        <Button>Login</Button>
                    </Link>

                    <Link to="/register">
                        <Button>Register</Button>
                    </Link>
                </StyledWelcomeBody>
                {Routes}
            </Router>
        );
    }
}

export default WelcomeBody;
