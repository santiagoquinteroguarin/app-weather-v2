import React from 'react';
import styled from "styled-components";

const ErrorStyled = styled.div`
    display: flex;
    justify-content: center;

    .message-error {
        background: red;
        font: var(--body2-bold);
        margin: 0;
    }
`;

const Error = ({message}) => {
    return (
        <ErrorStyled>
            <p className="message-error">{message}</p>
        </ErrorStyled>
    );
}

export default Error;