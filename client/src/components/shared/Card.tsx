import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { FiBriefcase, FiBook } from 'react-icons/fi'

interface ContainerProps {
    url: string
}

const Container = styled.div<ContainerProps>`
    width: 400px;
    height: 600px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 4px;
    background: ${({ url }) => `url(${url})`};
    background-size: cover;
    background-position: center;
    user-select: none;
`;

const Name = styled.p`
    color: white;
    font-weight: 600;
    font-size: 22px;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
`;

const JobIcon = styled(FiBriefcase)`
    margin: 2px 5px 0 0;
    color: white;
    font-size: 18px;
`;

const BookIcon = styled(FiBook)`
    margin: 2px 5px 0 0;
    color: white;
    font-size: 18px;
`;

const Text = styled.p`
    margin-top: 5px;
    color: white;
    font-weight: 500;
    font-size: 16px;
`;

const Description = styled.div`
    max-height: 60px;
    margin: 10px 0 10px 0;
    overflow: hidden;
    color: white;
    font-size: 16px;
`;

interface CardProps {
    url: string
    name: string
    age: number
    job: string
    education: string
    description: string
}

const Card: FunctionComponent<CardProps> = ({
    url, name, age, job, education, description
}) => {
    return (
        <Container url={url}>
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
        </Container>
    )
};

export default Card;
