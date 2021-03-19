import RestHttp from "../http/RestHttp";
import { ApolloClient } from "@apollo/client";
import { createApolloClient } from "../providers/apollo";
import merge from "deepmerge";

export class BaseModel {
    http: RestHttp;
    apollo: ApolloClient<any>;
    name: string;
    tag: string;
    headers: any;
    data: any;

    constructor({ rest, graphql, name, tag }) {
        if (!rest || !graphql) console.warn("RestHttp and ApolloClient is required!");
        if (!tag) console.warn("Project Tag is not defined, default main will be used!", "BaseModel");

        if (typeof rest !== "object") console.warn("invalid rest config");
        if (typeof graphql !== "object") console.warn("invalid graphql config");

        const headers = {
            "im-project": name,
            "im-project-tag": tag || "main",
        };
        this.http = new RestHttp({ ...rest, headers: merge(rest?.headers, headers) });
        this.apollo = createApolloClient({ ...graphql, headers: merge(graphql?.headers, headers) });
        this.tag = tag;
        this.name = name;
        this.headers = headers;
    }

    validate = () => true;

    hydrate = (arg: any) => typeof arg === "object" && this.data;

    path = () => `/api/${this.name}${this.data?.id ? `/${this.data.id}` : ""}`;

    error = (e: any) => e && console.log(e.message);

    find = async (id: string) => {
        let res = await this.http.get(id);
        return res.ok ? await res.json() : null;
    };

    list = async (gql: any, vars?: any) => {
        let res = await this.apollo.query({ query: gql, variables: vars, context: { headers: this.headers } });
        return res?.data;
    };

    query = async (gql: any, vars?: any) => {
        let res = await this.apollo.query({ query: gql, variables: vars, context: { headers: this.headers } });
        return res?.data;
    };

    create = async (options?: any) => {
        if (this.data) {
            let res = await this.http.post(this.path(), this.data, options);
            return res.ok ? await res.json() : false;
        }
    };

    update = async (options?: any) => {
        if (this.data?.id) {
            let res = await this.http.put(this.path(), this.data, options);
            return res.ok ? await res.json() : false;
        }
    };

    delete = async (options?: any) => {
        if (this.data?.id) {
            let res = await this.http.del(this.path(), options);
            return res.ok ? await res.json() : false;
        }
    };
}
