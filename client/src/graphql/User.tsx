import gql from 'graphql-tag';

/**
 * Query
 */
export const UserQuery = gql`
    query UserQuery($id: ID!) {
        user(id: $id) {
            id
            username
            age
            job
            education
            description
        }
    }
`;

export const UsersQuery = gql`
    query UsersQuery {
        users {
            id
            username
            age
            job
            education
            description
        }
    }
`;

export const MeQuery = gql`
    query MeQuery {
        me {
            id
            username
            age
            matches {
                matchId
                match {
                    date
                }
                matchedUserId
                matchedUser {
                    id
                    username
                    age
                }
            }
        }
    }
`;

/**
 * Mutation
 */
export const RegisterMutation = gql`
    mutation RegisterMutation(
        $email: String!
        $password: String!
        $username: String!
        $age: Int!
        $job: String
        $education: String
        $description: String
    ) {
        register(
            input: {
                email: $email
                password: $password
                username: $username
                age: $age
                job: $job
                education: $education
                description: $description
            }
        )
    }
`;

export const LoginMutation = gql`
    mutation LoginMutation($email: String!, $password: String!) {
        login(input: { email: $email, password: $password })
    }
`;
