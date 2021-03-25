import { isArray, isEmpty } from "lodash";
import { BaseModel } from "../../core";
import { GET_PROJECTS, GET_PROJECT_CATEGORIES, GET_PROJECT_HOSTS, GET_PROJECT_FEATURES } from "./queries";

export default class ProjectModel extends BaseModel {
    constructor(props) {
        super({ ...props, name: "projects", tag: "master" });
    }
    async list(gql = null, options?: any) {
        const res = await super.list(GET_PROJECTS);
        return res?.projects || {};
    }
    async get_user(email: string) {
        const options = { headers: { Accept: "application/json", "im-project-tag": "main" } };
        const data = await super.search([{ name: "email", value: email }], "users", options);
        const user = isArray(data) ? data[0] : data;
        return user;
    }

    async get_collabs(args: any[]) {
        let collabs: any = [];
        if (!isArray(args)) return collabs;
        collabs = Promise.all(
            args.map(async (arg) => {
                const user = await this.get_user(arg?.email);
                if (!user) return null;
                const iri = `/api/users/${user.id}`;
                return { ...arg, iri };
            })
        );
        return collabs;
    }
    async categories() {
        const res = await super.list(GET_PROJECT_CATEGORIES);
        return res?.categories || {};
    }

    async hosts() {
        const res = await super.list(GET_PROJECT_HOSTS);
        return res?.hosts || {};
    }

    async features() {
        const res = await super.list(GET_PROJECT_FEATURES);
        return res?.features || {};
    }
}
