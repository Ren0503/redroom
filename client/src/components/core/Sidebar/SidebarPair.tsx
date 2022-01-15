import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Avatar } from 'components/shared';

const Container = styled.div`
    width: 84px;
    height: 110px;
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`;

const Name = styled.p`
    margin-top: 6px;
    color: black;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    user-select: none;
`;

interface SidebarPairProps {
    url: string
    name: string
    notificationDot?: boolean
    onClick?: () => void
}

const SidebarPair: FunctionComponent<SidebarPairProps> = ({
    url,
    name,
    notificationDot,
    onClick = () => null
}) => {
    return (
        <Container onClick={onClick}>
            <Avatar url={url} size={80} notificationDot={notificationDot} />

            <Name>{name}</Name>
        </Container>
    )
};

export default SidebarPair;
