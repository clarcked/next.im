import { gql } from "@apollo/client";

export const GET_FEATURES = gql`
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

export const GET_FEATURE = gql`
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
