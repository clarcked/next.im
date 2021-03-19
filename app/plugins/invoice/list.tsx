import React, { useEffect, useState } from "react";
import { BaseManager } from "../../core";
import InvoiceModel from "./model";
import InvoiceCard from "./card";

const InvoiceList = (props: any) => {
    const { Model, Card } = props;
    const [invoices, set_invoices] = useState<any>([]);
    const fetch = () => {
        Model.list()
            .then((res) => {
                set_invoices(res?.edges);
            })
            .catch((e) => {});
    };
    useEffect(() => {
        fetch();
    }, []);

    return (
        <div className="rows j-center gap pad scroll">
            {invoices?.edges?.map((invoice, idx) => (
                <div key={idx} className="col-2">
                    <Card data={invoice} />
                </div>
            ))}
        </div>
    );
};

export default BaseManager(InvoiceList, { Model: InvoiceModel, Card: InvoiceCard });
