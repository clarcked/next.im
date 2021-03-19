import { gql } from "@apollo/client";

export const GET_ENTITIES = gql`
    query GetTags {
        tags {
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

export const GET_ENTITY = gql`
    query GetTag($id: ID!) {
        tag(id: $id) {
            id
            _id
            createdAt
            modifiedAt
            status
            note
        }
    }
`;
