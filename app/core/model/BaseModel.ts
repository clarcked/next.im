import RestHttp from "../http/RestHttp";
import { ApolloClient } from "@apollo/client";

export class BaseModel {
    rest: RestHttp;
    apollo: ApolloClient<any>;
    name: string;
    tag: string;
    headers: any;
    data: any;

    constructor({ rest, apollo, name, tag }) {
        this.rest = rest;
        this.name = name;
        this.apollo = apollo;
        this.tag = tag;
        this.headers = {
            "im-project": name,
            "im-project-tag": tag,
        };
    }

    validate = () => true;

    hydrate = (arg: any) => typeof arg === "object" && this.data;

    path = () => `/api/${this.name}${this.data?.id ? `/${this.data.id}` : ""}`;

    error = (e: any) => e && console.log(e.message);

    find = async (id: string) => {
        let res = await this.rest.get(id);
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
            let res = await this.rest.post(this.path(), this.data, options);
            return res.ok ? await res.json() : false;
        }
    };

    update = async (options?: any) => {
        if (this.data?.id) {
            let res = await this.rest.put(this.path(), this.data, options);
            return res.ok ? await res.json() : false;
        }
    };

    delete = async (options?: any) => {
        if (this.data?.id) {
            let res = await this.rest.del(this.path(), options);
            return res.ok ? await res.json() : false;
        }
    };
}
