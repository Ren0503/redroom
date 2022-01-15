import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100px;
    padding: 20px;
    display: flex;
`;

const Input = styled.input`
    width: 100%;
    height: 40px;
    padding: 0 10px 0 10px;
    border: none;
    border-bottom: 1px solid lightgray;
    font-weight: 500;
    transition: border 300ms ease;

    &:focus {
        border-bottom: 1px solid red;
    }

    &::placeholder {
        color: lightgray;
    }
`;

interface SearchInputProps {
    onChange: (text: string) => void
};

const SearchInput: FunctionComponent<SearchInputProps> = ({ onChange }) => {
    return (
        <Container>
            <Input 
                onChange={e => onChange(e.target.value)}
                placeholder='Search friend'
            />
        </Container>
    )
};

export default SearchInput;
