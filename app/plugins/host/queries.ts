import { gql } from "@apollo/client";

export const GET_HOSTS = gql`
    query GetHosts {
        hosts {
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

export const GET_HOST = gql`
    query GetHost($id: ID!) {
        host(id: $id) {
            id
            _id
            createdAt
            modifiedAt
            status
            note
        }
    }
`;
