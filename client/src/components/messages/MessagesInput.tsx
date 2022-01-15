import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { FiSend } from 'react-icons/fi';

const Container = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    border-top: 1px solid lightgray;
    background-color: #ecf4f4;
`;

const InputWrapper = styled.div`
    flex: 1;
    padding: 0 20px 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledInput = styled.input`
    width: 100%;
    background-color: #ecf4f4;
    font-size: 14px;
`;

const Button = styled.div`
    width: 70px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(
        90deg,
        rgba(255, 52, 126, 1) 0%,
        rgba(255, 116, 97, 1) 100%
    );
    color: white;
    cursor: pointer;
`;

const SendIcon = styled(FiSend)`
    font-size: 32px;
`;

interface MessagesInputProps {
    onChange: (text: string) => void
    onKeyPress: (e: any) => void
    onClick: () => void
    value?: string
}

const MessagesInput: FunctionComponent<MessagesInputProps> = ({
    onChange,
    onKeyPress,
    value,
    onClick
}) => {
    return (
        <Container>
            <InputWrapper>
                <StyledInput
                    onChange={e => onChange(e.target.value)}
                    onKeyPress={onKeyPress}
                    value={value}
                    placeholder="Type a message..."
                />
            </InputWrapper>
            <Button onClick={onClick}>
                <SendIcon />
            </Button>
        </Container>
    )
};

export default MessagesInput;
