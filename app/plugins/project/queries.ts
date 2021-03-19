import { gql } from "@apollo/client";

export const GET_ENTITIES = gql`
    query GetProjects {
        projects {
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
    query GetProject($id: ID!) {
        project(id: $id) {
            id
            _id
            createdAt
            modifiedAt
            status
            note
        }
    }
`;
