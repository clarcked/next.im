import React from "react";
import { FaServer } from "react-icons/fa";
import { BaseLink } from "../../core";
import HostManager from "./manager";

const HostLink = (props: any) => {
    const { open } = props;
    return (
        <a className="is-icon" onClick={open}>
            <FaServer />
        </a>
    );
};

export default BaseLink(HostLink, { Manager: HostManager });
