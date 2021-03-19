import { BaseModel } from "../../core";
import { GET_USERS } from "./queries";

export default class UserModel extends BaseModel {
    constructor(props) {
        super({ ...props, name: "users", tag: "main" });
    }

    async list(gql = null, options?: any) {
        const res = await super.list(GET_USERS);
        return res?.users || {};
    }
}
