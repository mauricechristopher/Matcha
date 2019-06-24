import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../Devices";

export const NavbarWrapper = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    /* align-items: center; */
    background: transparent;
    width: 100%;
`;

export const Title = styled(Link)`
    color: darkslategray;
    text-decoration: none;
    font-family: "Major Mono Display", monospace;
    @media ${device.mobileS} {
        font-size: 24px;
        margin-top: 24px;
    }
    @media ${device.mobileM} {
        font-size: 24px;
        margin-top: 42px;
    }
    @media ${device.tablet} {
        font-size: 42px;
    }
    @media ${device.desktop} {
        font-size: 84px;
    }
`;
