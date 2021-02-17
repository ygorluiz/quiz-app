import styled from "styled-components";

export const ColumButtton = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 71rem;
    align-items: center;
    justify-content: center;
    @media (max-width: 575px) {
        flex-direction: column;
    }
`;

export const AnswerButton = styled.button`
    //background-color: rgb(232, 63, 91);

    padding: 12px 32px;
    font-family: "Avenir Next Cyr";
    font-weight: 500;
    font-style: normal;
    cursor: pointer;
    transition: background 0.2s ease 0s;

    &:hover {
        color: rgb(225, 225, 230);
        background-color: rgb(32, 32, 36);
    }
`;

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover {
        opacity: 0.8;
    }

    button {
        background: ${({ correct, userClicked }) =>
            correct
                ? "#48e288"
                : !correct && userClicked
                ? "rgb(32,32,36)"
                : "rgb(232, 63, 91)"};

        color: ${({ correct, userClicked }) =>
            correct
                ? "rgb(32, 32, 36)"
                : !correct && userClicked
                ? "rgb(225, 225, 230)"
                : "rgb(32, 32, 36)"};

        padding: 12px 32px;
        font-family: "Avenir Next Cyr";
        font-weight: 500;
        font-style: normal;
        cursor: pointer;
        transition: background 0.2s ease 0s;

        &:hover {
            color: rgb(225, 225, 230);
            background-color: rgb(32, 32, 36);
        }
    }
`;
