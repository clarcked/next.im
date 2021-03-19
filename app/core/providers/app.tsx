import React from "react";

export const App = React.createContext<any>({});
export const AppConsumer = App.Consumer;
export const AppProvider = App.Provider;
export const getConfigs = (ctx: any) => {
    let props: any = {};
    props.rest = {
        uri: process.env.REST_URL,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    };
    props.graphql = { uri: process.env.GRAPHQL_URL };
    props.socket = { uri: process.env.SOCKETIO_URL };
    return props;
};
