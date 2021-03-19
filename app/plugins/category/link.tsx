import React from "react";
import { FaSlackHash } from "react-icons/fa";
import { BaseLink } from "../../core";
import CategoryManager from "./manager";

const CategoryLink = (props: any) => {
    const { open } = props;
    return (
        <a title="category" className="is-icon" onClick={open}>
            <FaSlackHash />
        </a>
    );
};

export default BaseLink(CategoryLink, { Manager: CategoryManager });
