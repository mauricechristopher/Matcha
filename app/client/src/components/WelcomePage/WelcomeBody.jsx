import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Routes } from "../../routes/Routes";

export const StyledWelcomeBody = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(#50e2d1 21%, #00fa9a);
`;

export const Button = styled.button`
    background: transparent;
    height: 84px;
    width: 200px;
    border-radius: 3px;
    border: 2px solid #a5b6ff;
    color: #a5b6ff;
    margin: 0.5em;
    padding: 0.25em 1em;
    font-size: 30px;
    cursor: pointer;
    &:hover {
        background: #a5b6ff;
        color: #00fa9a;
        border: 2px solid #00fa9a;
    }
    &:focus {
        background: #a5b6ff;
        color: #00fa9a;
        border: 2px solid #00fa9a;
        outline: none;
    }
`;

class WelcomeBody extends React.Component {
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
