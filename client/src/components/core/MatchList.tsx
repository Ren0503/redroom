import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { MeQuery, NewMatchSubscription } from 'graphql';
import { useQuery, useSubscription } from 'react-apollo-hooks';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { SidebarPair } from 'styles/core';

const url =
    'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/45173293_2321717948056445_8240840560714186752_o.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=a0eee70fea5333cdcf42494eabb6090a&oe=5CA4D558';

const Container = styled.div`
    width: calc(100% - 20px);
    margin: 0 20px 20px 20px;
    padding: 20px 0 10px 0;
    display: flex;
    overflow-x: scroll;
    box-sizing: border-box;
`;

export const MatchListComp: FunctionComponent<RouteComponentProps> = ({ history }) => {
    const { data, loading } = useQuery(MeQuery)
    useSubscription(NewMatchSubscription, {
        variables: { userId: 1 },
        onSubscriptionData: ({ client, subscriptionData }) => {
            if (!subscriptionData.data.newMatch) return
            alert('its a match!')
            const data: any = client.readQuery({
                query: MeQuery
            })

            client.writeQuery({
                query: MeQuery,
                data: {
                    me: {
                        ...data.me,
                        matches: [
                            subscriptionData.data.newMatch,
                            ...data.me.matches
                        ]
                    }
                }
            })
        }
    });

    if (loading) return <p>Loading...</p>

    return (
        <Container>
            {data.me.matches.map((match: any) => (
                <div key={match.matchId}>
                    <SidebarPair
                        url={url}
                        name={match.matchedUser.username}
                        onClick={() =>
                            history.push(
                                `/app/messages/${match.matchId}/${match.matchedUserId
                                }`
                            )
                        }
                    />
                </div>
            ))}
        </Container>
    )
}

export const MatchList = withRouter(MatchListComp);
