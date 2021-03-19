import { BaseModel } from "../../core/model/BaseModel";

export default class CategoryModel extends BaseModel {
    constructor(props) {
        super({ ...props, name: "categories", tag: "master" });
    }
}
