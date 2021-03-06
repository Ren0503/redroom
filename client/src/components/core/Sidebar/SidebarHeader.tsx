import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface SidebarHeaderProps {
    url: string
}

const Container = styled.div`
    width: 100%;
    height: 70px;
    padding: 0 15px 0 15px;
    display: flex;
    align-items: center;
    background: linear-gradient(90deg, rgba(255, 52, 126, 1) 0%, rgba(255, 116, 97, 1) 100%);
`;

const Avatar = styled.div<SidebarHeaderProps>`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid white;
    background: ${({ url }) => `url(${url})`};
    background-size: cover;
    background-position: center;
`;

const Text = styled.p`
    margin-left: 20px;
    color: white;
    font-size: 20px;
`;

const SidebarHeader: FunctionComponent<SidebarHeaderProps> = ({ url }) => {
    return (
        <Container>
            <Avatar url={url} />
            <Text>My Profile</Text>
        </Container>
    )
};

export default SidebarHeader;
