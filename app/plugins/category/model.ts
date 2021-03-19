import { BaseModel } from "../../core";
import { GET_CATEGORIES } from "./queries";

export default class CategoryModel extends BaseModel {
    constructor(props) {
        super({ ...props, name: "categories", tag: "master" });
    }

    async list(gql = null, options?: any) {
        const res = await super.list(GET_CATEGORIES);
        return res?.categories || {};
    }
}
