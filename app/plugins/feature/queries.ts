import { gql } from "@apollo/client";

export const GET_ENTITIES = gql`
    query GetFeatures {
        features {
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
    query GetFeature($id: ID!) {
        feature(id: $id) {
            id
            _id
            createdAt
            modifiedAt
            status
            note
        }
    }
`;
