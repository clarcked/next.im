import { BaseModel } from "../../core";
import { GET_INVOICES } from "./queries";

export default class InvoiceModel extends BaseModel {
    constructor(props) {
        super({ ...props, name: "invoices", tag: "master" });
    }

    async list(gql = null, options?: any) {
        const res = await super.list(GET_INVOICES);
        return res?.invoices || {};
    }
}
