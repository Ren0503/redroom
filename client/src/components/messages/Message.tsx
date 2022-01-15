import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { Avatar } from 'components/shared';

interface ReverseProps {
    reverse: boolean
}

const Container = styled.div<ReverseProps>`
    padding: 15px;
    display: flex;
    align-items: flex-end;

    ${({ reverse }) =>
        reverse &&
        css`
            justify-content: flex-start;
            flex-flow: row-reverse;
        `
    }
`;

const Content = styled.div<ReverseProps>`
    max-width: 30%;
    margin: 0 5px 0 5px;
    padding: 10px 12px 10px 12px;
    border-radius: 25px;
    border-bottom-left-radius: 5px;
    background-color: #e7e7e7;
    font-size: 14px;

    ${({ reverse }) =>
        reverse &&
        css`
            border-bottom-left-radius: 25px;
            border-bottom-right-radius: 5px;
            background-color: #34abf9;
            color: white;
        `
    }
`;

interface MessageProps {
    url: string
    message: string
    reverse?: boolean
}

const Message: FunctionComponent<MessageProps> = ({
    url,
    message,
    reverse = false
}) => {
    return (
        <Container reverse={reverse}>
            <Avatar size={50} url={url} />

            <Content reverse={reverse}>{message}</Content>
        </Container>
    )
};

export default Message;
