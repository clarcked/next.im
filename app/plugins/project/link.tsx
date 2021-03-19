import React, { Component } from "react";
import { FaSlackHash } from "react-icons/fa";
import { BaseLink } from "../../core";
import ProjectManager from "./manager";

const ProjectLink = (props: any) => {
    class Enhanced extends Component<any, any> {
        render() {
            const { open } = this.props;
            return (
                <a className=" is-icon" onClick={open}>
                    <FaSlackHash />
                </a>
            );
        }
    }
    const Link = BaseLink(Enhanced, { ...props, Manager: ProjectManager });
    return <Link />;
};

export default ProjectLink;
