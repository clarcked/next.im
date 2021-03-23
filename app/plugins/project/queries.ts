import { gql } from "@apollo/client";

export const GET_PROJECT_FEATURES = gql`
    query GetProjectFeatures {
        features {
            totalCount
            edges {
                node {
                    id
                    _id
                    status
                    note
                    name
                    cost
                    unit
                }
            }
        }
    }
`;

export const GET_PROJECT_HOSTS = gql`
    query GetProjectHosts {
        hosts {
            totalCount
            edges {
                node {
                    id
                    _id
                    status
                    note
                    name
                    ip
                    region
                }
            }
        }
    }
`;

export const GET_PROJECT_CATEGORIES = gql`
    query GetProjectCategories {
        categories {
            totalCount
            edges {
                node {
                    id
                    _id
                    status
                    note
                    name
                }
            }
        }
    }
`;

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
