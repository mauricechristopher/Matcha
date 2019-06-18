import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styled from "styled-components";
import { Routes } from "../../routes/Routes";

const NavbarWrapper = styled.div`
    position: fixed;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #50e2d1;
    height: 200px;
    width: 100%;
`;

const Title = styled(Link)`
    color: darkslategray;
    text-decoration: none;
`;

class Navbar extends React.Component {
    render() {
        return (
            <Router>
                <NavbarWrapper>
                    <Title to="/">
                        <h1>Welcome</h1>
                    </Title>
                    {Routes}
                </NavbarWrapper>
            </Router>
        );
    }
}

export default Navbar;
