import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    height: 70vh;
    width: 80%;
    align-items: center;
    justify-content: center;
    display: flex;
    align-self: center;
    background-color: rgb(32, 32, 36);
    border-bottom: 2px solid rgb(232, 63, 91);
    border-radius: 5px 5px 0px 0px;
    transition: background 0.2s ease 0s;
    color: rgb(225, 225, 230);
    flex-direction: column;

    &:hover {
        background: rgb(41, 41, 46);
    }
`;
export const StartButton = styled.button`
    background-color: rgb(232, 63, 91);
    padding: 12px 32px;
    border-radius: 5px;
    font-family: "Avenir Next Cyr";
    font-weight: 500;
    font-style: normal;
    cursor: pointer;
    transition: background 0.2s ease 0s;

    &:hover {
        color: rgb(225, 225, 230);
        background-color: rgb(32, 32, 36);
        border: 2px solid rgb(232, 63, 91);
    }
`;

export const NextButton = styled.button`
    background-color: rgb(232, 63, 91);

    padding: 12px 32px;
    border-radius: 5px;
    font-family: "Avenir Next Cyr";
    font-weight: 500;
    font-style: normal;
    cursor: pointer;
    transition: background 0.2s ease 0s;
    margin-top: 50px;

    &:hover {
        color: rgb(225, 225, 230);
        background-color: rgb(32, 32, 36);
        border: 2px solid rgb(232, 63, 91);
    }
`;
