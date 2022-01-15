import gql from 'graphql-tag';

export const LikesQuery = gql`
    query LikesQuery {
        likes
    }
`;

export const LikeMutation = gql`
    mutation LikeMutation($userId: ID!, $toUserId: ID!) {
        like(input: { userId: $userId, toUserId: $toUserId })
    }
`;

export const DislikeMutation = gql`
    mutation DislikeMutation($toUserId: ID!) {
        dislike(toUserId: $toUserId)
    }
`;

export const LikesSubscription = gql`
    subscription newLike($userId: ID!) {
        newLike(userId: $userId)
    }
`;
