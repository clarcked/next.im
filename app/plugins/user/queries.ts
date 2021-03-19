import { gql } from "@apollo/client";

export const GET_USERS = gql`
    query GetUsers {
        users {
            totalCount
            edges {
                node {
                    id
                    _id
                    createdAt
                    modifiedAt
                    status
                    note
                }
            }
        }
    }
`;

export const GET_USER = gql`
    query GetUser($id: ID!) {
        user(id: $id) {
            id
            _id
            createdAt
            modifiedAt
            status
            note
        }
    }
`;
