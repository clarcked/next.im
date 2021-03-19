import React from "react";
import { VscNewFolder } from "react-icons/vsc";
import { BaseLink } from "../../core";
import InvoiceManager from "./manager";

const InvoiceLink = (props: any) => {
    const { open } = props;
    return (
        <a className="is-icon" onClick={open}>
            <VscNewFolder />
        </a>
    );
};

export default BaseLink(InvoiceLink, { Manager: InvoiceManager });
