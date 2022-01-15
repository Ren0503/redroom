import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Avatar } from 'styles/shared';

const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    background-color: white;
`;

const Content = styled.div`
    margin-left: 25px;
    display: flex;
    flex-direction: column;
`;

const Name = styled.p`
    color: black;
    font-weight: 500;
    font-size: 18px;
`;

const LastMessage = styled.p`
    margin-top: 12px;
    color: darkgray;
    font-size: 14px;
`;

interface SidebarMessageProps {
    url: string
    notificationDot?: boolean
    message: string
}

const SidebarMessage: FunctionComponent<SidebarMessageProps> = ({
    url,
    notificationDot,
    message,
}) => {
    return (
        <Container>
            <Avatar size={80} url={url} notificationDot={notificationDot} />

            <Content>
                <Name>Kevin</Name>

                <LastMessage>{message}</LastMessage>
            </Content>
        </Container>
    )
};

export default SidebarMessage;
