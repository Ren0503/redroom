import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { AutoSizer, List } from 'react-virtualized';
import { SearchInput, SidebarHeader, SidebarMessage } from 'styles/core';
import { MatchList } from './MatchList';

const url =
    'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/45173293_2321717948056445_8240840560714186752_o.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=a0eee70fea5333cdcf42494eabb6090a&oe=5CA4D558';
const message = 'Hey! You look sweet!';

const Container = styled.div`
    width: 400px;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Text = styled.div`
    margin-left: 20px;
    color: #ff506b;
    font-weight: 500;
    font-size: 16px;
`;

const Messages = styled.div`
    flex-grow: 1;
    margin: 10px 0 0 20px;
`;

const Sidebar: FunctionComponent<{}> = React.memo(() => {
    const messagesList = ({ key, style }: any) => (
        <div>
            <SidebarMessage url={url} message={message} />
        </div>
    );

    return (
        <Container>
            <SidebarHeader url={url} />

            <SearchInput onChange={() => null} />

            <Text>Partner</Text>

            <MatchList />

            <Text>Messages</Text>

            <Messages>
                <AutoSizer disableWidth>
                    {({ height }) => (
                        <List
                            style={{ outline: 'none' }}
                            height={height}
                            rowCount={20}
                            rowHeight={100}
                            rowRenderer={messagesList}
                            width={380}
                        />
                    )}
                </AutoSizer>
            </Messages>
        </Container>
    )
});

export default Sidebar;
