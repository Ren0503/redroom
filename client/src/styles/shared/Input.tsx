import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 60px;
    padding: 15px;
    border-radius: 3px;
    border: 1px solid #e7e7e7;
`;

const Label = styled.p`
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 10px;
`;

const StyledInput = styled.input`
    width: 100%;
    height: 50px;
    margin-bottom: 15px;
    border: none;
    padding: 15px;
    border-radius: 3px;
    border: 2px solid #e7e7e7;
    font-weight: 500;
    transition: border 200ms ease;
    box-sizing: border-box;

    &:focus {
        outline: none;
        border: 2px solid #ee1675;
    }

    &::placeholder {
        color: #cccccc;
    }
`;

interface InputProps {
    onChange: (e: any) => void
    value?: string | number
    label: string
    type: string
    name: string
    placeholder?: string
}

const Input: FunctionComponent<InputProps> = ({
    placeholder,
    value,
    onChange,
    label,
    name,
    type
}) => {
    return (
        <>
            <Label>{label}</Label>
            <StyledInput
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
                type={type}
            />
        </>
    )
}

export default Input;
