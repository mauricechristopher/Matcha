import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarWrapper = styled.div`
    position: fixed;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background: #50e2d1;
    height: 200px;
    width: 100%;
`;

export const Title = styled(Link)`
    color: darkslategray;
    text-decoration: none;
`;

class Navbar extends React.Component {
    render() {
        return (
            <NavbarWrapper>
                <Title to="/">
                    <h1>Welcome</h1>
                </Title>
            </NavbarWrapper>
        );
    }
}

export default Navbar;
