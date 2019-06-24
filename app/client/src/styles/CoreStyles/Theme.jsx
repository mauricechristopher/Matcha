import styled from "styled-components";
import { device } from "../Devices";

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
    color: #a5b6ff;
    cursor: pointer;
    &:hover {
        background: #a5b6ff;
        color: #00fa9a;
        border: 2px solid transparent;
    }
    &:focus {
        background: #a5b6ff;
        color: #00fa9a;
        border: 2px solid transparent;
        outline: none;
    }
    @media ${device.mobileS} {
        height: 84px;
        width: 200px;
        margin: 0.5em;
        padding: 0.25em 1em;
        font-size: 30px;
        border-radius: 3px;
        border: 2px solid #a5b6ff;
    }
    @media ${device.mobileM} {
        height: 100px;
        width: 250px;
        font-size: 35px;
    }
`;
