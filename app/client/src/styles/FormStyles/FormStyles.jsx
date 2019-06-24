import styled from "styled-components";

export const LoginFormDiv = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const FormDiv = styled.div`
    width: 20%;
    z-index: 1;
`;

export const NameDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    z-index: 2;
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    font-size: 21px;
    background: transparent;
    text-align: center;
    border: none;
    color: darkslategrey;
    border-bottom: 1px solid #a5b6ff;
    margin: 8px 0;
    &:hover,
    &:focus {
        border-bottom: 2px solid #a5b6ff;
        outline: none;
        color: darkslategray;
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
        background: transparent;
        -webkit-text-fill-color: darkslategray;
        transition: background-color 5000s ease-in-out 0s;
    }
`;

export const NameInputDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 42%;
`;

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
