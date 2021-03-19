import { BaseModel } from "../../core";
import { GET_HOSTS } from "./queries";

export default class HostModel extends BaseModel {
    constructor(props) {
        super({ ...props, name: "hosts", tag: "master" });
    }

    async list(gql = null, options?: any) {
        const res = await super.list(GET_HOSTS);
        return res?.hosts || {};
    }
}
