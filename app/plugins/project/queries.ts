import { gql } from "@apollo/client";

export const GET_ENTITIES = gql`
    query GetEntities {
        entities {
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
    query GetEntity($id: ID!) {
        entity(id: $id) {
            id
            _id
            createdAt
            modifiedAt
            status
            note
        }
    }
`;
