import React from "react";
import { VscNewFolder } from "react-icons/vsc";
import { BaseLink } from "../../core";
import EntityManager from "./manager";

const EntityLink = (props: any) => {
    const { open } = props;
    return (
        <a className="is-icon" onClick={open}>
            <VscNewFolder />
        </a>
    );
};

export default BaseLink(EntityLink, { Manager: EntityManager });
