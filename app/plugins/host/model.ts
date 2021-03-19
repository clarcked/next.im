import { BaseModel } from "../../core";

export default class HostModel extends BaseModel {
    constructor(props) {
        super({ ...props, name: "hosts", tag: "master" });
    }
}
