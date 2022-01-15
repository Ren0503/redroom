import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface SidebarLikesCounterProps {
    url: string
    likes?: number
}

const Container = styled.div`
    width: 80px;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Text = styled.div`
    margin-top: 6px;
    color: black;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
`;

const Relative = styled.div`
    position: relative;
`;

const GoldBorder = styled.div`
    width: 80px;
    height: 80px;
    border: 4px solid #eea851;
    border-radius: 50%;
`;

const BlurImg = styled.div<SidebarLikesCounterProps>`
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    margin: 4px;
    border-radius: 50%;
    background: ${({ url }) => `url(${url})`};
    background-size: cover;
    background-position: center;
    filter: blur(2px);
`;

const LikesCount = styled.div`
    width: 50px;
    height: 50px;
    margin: -25px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    background: linear-gradient(
        90deg,
        rgba(238, 168, 81, 1) 0%,
        rgba(255, 238, 110, 1) 100%
    );
    border-radius: 50%;
    color: white;
    font-weight: 500;
    font-size: 16px;
`;

const SidebarLikesCounter: FunctionComponent<SidebarLikesCounterProps> = ({
    url,
    likes
}) => {
    return (
        <Container>
            <Relative>
                <GoldBorder>
                    <BlurImg url={url} />
                </GoldBorder>

                <LikesCount>{likes}+</LikesCount>
            </Relative>

            <Text>Like</Text>
        </Container>
    )
}

export default SidebarLikesCounter;
