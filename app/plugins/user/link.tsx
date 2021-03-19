import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { BaseLink } from "../../core";
import UserManager from "./manager";

const UserLink = (props: any) => {
    const { open } = props;
    return (
        <a className="is-icon" onClick={open}>
            <FaUserEdit />
        </a>
    );
};

export default BaseLink(UserLink, { Manager: UserManager });
