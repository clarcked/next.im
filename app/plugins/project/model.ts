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
