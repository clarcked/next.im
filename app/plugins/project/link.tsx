import React from "react";
import { VscNewFolder } from "react-icons/vsc";
import { BaseLink } from "../../core";
import ProjectManager from "./manager";

const ProjectLink = (props: any) => {
    const { open } = props;
    return (
        <a className="is-icon" onClick={open}>
            <VscNewFolder />
        </a>
    );
};

export default BaseLink(ProjectLink, { Manager: ProjectManager, className: "w-35v" });
