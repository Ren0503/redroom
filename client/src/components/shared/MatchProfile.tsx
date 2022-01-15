import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { FiBriefcase, FiBook } from 'react-icons/fi';

interface ImageProps {
    url: string
};

const Container = styled.div`
    width: 350px;
    height: 100%;
    display: flex;
    flex-flow: column;
    background-color: #edf4f5;
`;

const ProfileImage = styled.div<ImageProps>`
    width: 100%;
    height: 500px;
    background: ${({ url }) => `url(${url})`};
    background-size: cover;
    background-position: center;
`;

const Content = styled.div`
    flex: 1;
    padding: 15px;
    border-left: 1px solid #d6d6d6;
    color: #4f4f4f;
`;

const Name = styled.p`
    font-weight: 600;
    font-size: 22px;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
`;

const JobIcon = styled(FiBriefcase)`
    margin: 2px 5px 0 0;
    font-size: 18px;
`;

const BookIcon = styled(FiBook)`
    margin: 2px 5px 0 0;
    font-size: 18px;
`;

const Text = styled.p`
    margin-top: 5px;
    font-weight: 500;
    font-size: 16px;
`;

const Description = styled.div`
    max-height: 60px;
    margin: 30px 0 10px 0;
    overflow: hidden;
    font-size: 16px;
`;

interface MatchProfileProps {
    url: string
    name: string
    age: number
    job?: string
    education?: string
    description?: string
}

const MatchProfile: FunctionComponent<MatchProfileProps> = ({
    url,
    name,
    age,
    job,
    education,
    description
}) => {
    return (
        <Container>
            <ProfileImage url={url} />

            <Content>
                <Name>
                    {name}, {age}
                </Name>

                {job && (
                    <Row>
                        <JobIcon />
                        <Text>{job}</Text>
                    </Row>
                )}

                {education && (
                    <Row>
                        <BookIcon />
                        <Text>{education}</Text>
                    </Row>
                )}

                <Description>{description}</Description>
            </Content>
        </Container>
    )
};

export default MatchProfile;
