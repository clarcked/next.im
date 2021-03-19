import { ApolloProvider, ApolloClient } from "@apollo/client";
import React from "react";
import { useApollo } from "./apollo";

export const Gql = React.createContext<ApolloClient<any>>(null);
export const GqlConsumer = Gql.Consumer;
export const GqlProvider = (props: any) => {
    const apollo = useApollo(props);
    return (
        <Gql.Provider value={apollo}>
            <ApolloProvider client={apollo}>{props.children}</ApolloProvider>
        </Gql.Provider>
    );
};
