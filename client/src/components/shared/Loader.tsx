import React, { FunctionComponent } from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
    color?: string;
}

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Container = styled.div<LoaderProps>`
    border: 3px solid transparent;
    border-top: ${({ color }) =>
        color ? '3px solid ' + color : '3px solid white;'};
    border-radius: 50%;
    width: 25px;
    height: 25px;
    animation: ${spin} 0.5s cubic-bezier(0.5, 0.1, 0.4, 0.9) infinite;
`;

const Loader: FunctionComponent<LoaderProps> = ({ color }) => {
    return (
        <Container color={color} />
    )
};

export default Loader;
