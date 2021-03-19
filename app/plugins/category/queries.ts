import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
    query GetCategories {
        categories {
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

export const GET_CATEGORY = gql`
    query GetCategory($id: ID!) {
        category(id: $id) {
            id
            _id
            createdAt
            modifiedAt
            status
            note
        }
    }
`;
