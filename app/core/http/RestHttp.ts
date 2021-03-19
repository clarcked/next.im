import merge from "deepmerge";

export default class RestHttp {
    private base_url: any;
    private headers: any;

    constructor({ uri, headers = {} }) {
        this.base_url = uri;
        this.headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...headers,
        };
    }

    error = (e: any) => e && console.log(e?.message);

    url = (path: string) => `${this.base_url}${path}`;

    body = (data: any) => (typeof data === "object" ? JSON.stringify(data) : data);

    options = (arg: any) => {
        let options: any = {};
        options.headers = this.headers;
        return merge(options, arg);
    };

    request = async (args: any) => {
        try {
            return await fetch(this.url(args?.path), this.options(args));
        } catch (error) {
            this.error(error);
        }
    };

    query = async (path: string, options?: any) => {
        return await this.request({ ...options, method: "GET", path: path });
    };

    mutate = async (verb: "POST" | "PUT" | "DELETE", path: string, data: any, options?: any) => {
        return await this.request({
            ...options,
            path: path,
            method: verb,
            body: this.body(data),
        });
    };

    get = async (path: string) => await this.query(path);

    post = async (path: string, data: any, options?: any) => await this.mutate("POST", path, data, options);

    put = async (path: string, data: any, options: any) => await this.mutate("PUT", path, data, options);

    del = async (path, options: any) => await this.request({ ...options, method: "DELETE", path: path });
}
