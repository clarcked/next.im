import { BaseModel } from "../../core";
import { GET_FEATURES } from "./queries";

export default class FeatureModel extends BaseModel {
    constructor(props) {
        super({ ...props, name: "features", tag: "master" });
    }

    async list(gql = null, options?: any) {
        const res = await super.list(GET_FEATURES);
        return res?.features || {};
    }
}
