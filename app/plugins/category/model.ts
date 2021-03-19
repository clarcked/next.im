import { BaseModel } from "../../core";

export default class CategoryModel extends BaseModel {
    constructor(props) {
        super({ ...props, name: "categories", tag: "master" });
    }
}
