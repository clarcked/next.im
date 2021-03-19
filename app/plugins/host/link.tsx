import React from "react";
import { VscNewFolder } from "react-icons/vsc";
import { BaseLink } from "../../core";
import HostManager from "./manager";

const HostLink = (props: any) => {
    const { open } = props;
    return (
        <a className="is-icon" onClick={open}>
            <VscNewFolder />
        </a>
    );
};

export default BaseLink(HostLink, { Manager: HostManager });
