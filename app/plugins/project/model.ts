import { BaseModel } from "../../core";
import { GET_PROJECTS } from "./queries";

export default class ProjectModel extends BaseModel {
    constructor(props) {
        super({ ...props, name: "projects", tag: "master" });
    }
    async list(gql = null, options?: any) {
        const res = await super.list(GET_PROJECTS);
        return res?.projects || {};
    }
}
