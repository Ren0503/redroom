import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { FiPlusCircle } from 'react-icons/fi';
import { Avatar } from 'components/shared';

const Container = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e2e2e2;
    background-color: #edf4f5;
`;

const Row = styled.div`
    display: flex;
`;

const Column = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const HeadText = styled.p`
    font-weight: 600;
    font-size: 12px;
    color: #7a8084;
`;

const SecondaryText = styled.p`
    margin-top: 3px;
    font-weight: 500;
    font-size: 14px;
    color: #959da2;
`;

const CloseIcon = styled(FiPlusCircle)`
    font-size: 38px;
    color: #f6549e;
    transform: rotate(45deg);
    cursor: pointer;
`;

interface MessagesHeaderProps {
    url: string
    name: string
    date: string
    onClick?: () => void
}

const MessagesHeader: FunctionComponent<MessagesHeaderProps> = ({
    url,
    name,
    date,
    onClick = () => null
}) => {
    return (
        <Container>
            <Row>
                <Avatar size={50} url={url} />

                <Column>
                    <HeadText>CONVERSATION WITH {name.toUpperCase()}</HeadText>

                    <SecondaryText>
                        {name} liked you on {date}
                    </SecondaryText>
                </Column>
            </Row>

            <CloseIcon onClick={onClick} />
        </Container>
    )
};

export default MessagesHeader;
