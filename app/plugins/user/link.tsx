import React from "react";
import { VscNewFolder } from "react-icons/vsc";
import { BaseLink } from "../../core";
import UserManager from "./manager";

const UserLink = (props: any) => {
    const { open } = props;
    return (
        <a className="is-icon" onClick={open}>
            <VscNewFolder />
        </a>
    );
};

export default BaseLink(UserLink, { Manager: UserManager });
