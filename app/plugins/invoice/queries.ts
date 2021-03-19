import { gql } from "@apollo/client";

export const GET_INVOICES = gql`
    query GetInvoices {
        invoices {
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

export const GET_INVOICE = gql`
    query GetInvoice($id: ID!) {
        invoice(id: $id) {
            id
            _id
            createdAt
            modifiedAt
            status
            note
        }
    }
`;
