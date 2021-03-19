import React, { useEffect, useState } from "react";
import { BaseManager } from "../../core";
import InvoiceModel from "./model";

const InvoiceManager = (props: any) => {
    const { Model } = props;
    const [invoices, set_invoices] = useState<any[]>([]);
    const fetch = () => {
        Model.list()
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {});
    };
    useEffect(() => {
        fetch();
    }, []);
    return (
        <div>
            <div className="pad">Invoice Manager</div>
        </div>
    );
};

export default BaseManager(InvoiceManager, { Model: InvoiceModel });
