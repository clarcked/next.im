import { BaseModel } from "../../core";

export default class TagModel extends BaseModel {
    constructor(props) {
        super({ ...props, name: "tags", tag: "main" });
    }
}
