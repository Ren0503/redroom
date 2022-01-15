import React from 'react';
import { LikesQuery, LikesSubscription } from 'graphql';
import { useQuery, useSubscription } from 'react-apollo-hooks';
import { SidebarLikesCounter } from './Sidebar';

const url =
    'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/45173293_2321717948056445_8240840560714186752_o.jpg?_nc_cat=107&_nc_ht=scontent-waw1-1.xx&oh=a0eee70fea5333cdcf42494eabb6090a&oe=5CA4D558';

const LikesCount = () => {
    const { data, loading } = useQuery(LikesQuery);
    useSubscription(LikesSubscription, {
        variables: { userId: 1 },
        onSubscriptionData: ({ client, subscriptionData }) => {
            if (!subscriptionData.data.newLike) return;

            const data: any = client.readQuery({
                query: LikesQuery
            });

            client.writeQuery({
                query: LikesQuery,
                data: {
                    likes: data.likes + 1
                }
            });
        }
    });

    if (loading) return <p>Loading....</p>

    return (
        <SidebarLikesCounter url={url} likes={data.likes} />
    )
};

export default LikesCount;
