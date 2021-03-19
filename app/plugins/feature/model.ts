import { BaseModel } from "../../core";

export default class FeatureModel extends BaseModel {
    constructor(props) {
        super({ ...props, name: "features", tag: "master" });
    }
}
