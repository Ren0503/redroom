import React from 'react'
import { FunctionComponent } from 'react';
import styled from 'styled-components'
import Loader from './Loader';

const Container = styled.div`
    width: 100%;
    height: 50px;
    margin: 10px 0 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    background: linear-gradient(
        90deg,
        rgba(255, 52, 126, 1) 0%,
        rgba(255, 116, 97, 1) 100%
    );
    color: white;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    user-select: none;
`;

interface ButtonProps {
    onClick?: () => void
    loading?: boolean
    spinnerColor?: string
}

const Button: FunctionComponent<ButtonProps> = ({
    children,
    onClick = () => null,
    loading = false,
    spinnerColor
}) => {
    return (
        <Container onClick={onClick}>
            {loading ? <Loader color={spinnerColor} /> : children}
        </Container>
    )
};

export default Button;
