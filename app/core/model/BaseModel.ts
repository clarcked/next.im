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

    validate() {
        return true;
    }

    hydrate(arg: any) {
        if (typeof arg === "object") this.data = arg;
    }

    path() {
        return `/api/${this.name}${this.data?.id ? `/${this.data.id}` : ""}`;
    }

    error(e: any) {
        e && console.log(e.message);
    }

    async find(id: string) {
        let res = await this.http.get(id);
        return res.ok ? await res.json() : null;
    }

    async list(gql: any, vars?: any) {
        let res = await this.apollo.query({ query: gql, variables: vars, context: { headers: this.headers } });
        return res?.data;
    }

    async query(gql: any, vars?: any) {
        let res = await this.apollo.query({ query: gql, variables: vars, context: { headers: this.headers } });
        return res?.data;
    }

    async create(options?: any) {
        if (this.data) {
            let res = await this.http.post(this.path(), this.data, options);
            return res.ok ? await res.json() : false;
        }
    }

    async update(options?: any) {
        if (this.data?.id) {
            let res = await this.http.put(this.path(), this.data, options);
            return res.ok ? await res.json() : false;
        }
    }

    async delete(options?: any) {
        if (this.data?.id) {
            let res = await this.http.del(this.path(), options);
            return res.ok ? await res.json() : false;
        }
    }
}
