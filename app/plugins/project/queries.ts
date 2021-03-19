import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
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

export const GET_PROJECT = gql`
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
