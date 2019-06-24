import styled from "styled-components";

export const WelcomeDiv = styled.div`
    height: 420px;
    width: 50%;
    background: gray;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const WelcomeTitle = styled.h1`
    font-size: 84px;
    font-family: sans-serif;
`;

export const WelcomeText = styled.h1`
    font-size: 42px;
    font-family: sans-serif;
`;

export const GetStartedButton = styled.button`
    background: transparent;
    height: 84px;
    width: 500px;
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
