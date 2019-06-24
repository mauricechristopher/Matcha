import React from "react";
import { NavbarWrapper, Title } from "../../styles/NavStyles/Navbar.jsx";

class Navbar extends React.Component {
    render() {
        return (
            <NavbarWrapper>
                <Title to="/">
                    <h1>Matcha</h1>
                </Title>
            </NavbarWrapper>
        );
    }
}

export default Navbar;
