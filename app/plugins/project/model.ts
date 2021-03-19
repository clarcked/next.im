import { BaseModel } from "../../core";

export default class ProjectModel extends BaseModel {
    constructor(props) {
        super({ ...props, name: "projects", tag: "master" });
    }
}
