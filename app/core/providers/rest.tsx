import React from "react";
import RestHttp from "../http/RestHttp";

export const Rest = React.createContext<RestHttp>(null);
export const RestConsumer = Rest.Consumer;
export const RestProvider = (props: any) => {
    const { rest, children } = props;
    const restHttp = rest ? new RestHttp(rest) : null;
    return <Rest.Provider value={restHttp}>{children}</Rest.Provider>;
};
