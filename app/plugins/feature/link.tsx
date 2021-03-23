import React from "react";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { BaseLink } from "../../core";
import FeatureManager from "./manager";

const FeatureLink = (props: any) => {
    const { open } = props;
    return (
        <a className="is-icon" onClick={open}>
            <HiOutlineViewGridAdd />
        </a>
    );
};

export default BaseLink(FeatureLink, { Manager: FeatureManager, className: "w-300" });
