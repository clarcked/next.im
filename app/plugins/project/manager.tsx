import React, { Component } from "react";
import { BaseManager } from "../../core";
import ProjectModel from "./model";

const ProjectManager = (props) => {
    class Enhanced extends Component<any, any> {
        render() {
            const arg = this.props;
            return (
                <div className="pad">
                    <div>Project management</div>
                </div>
            );
        }
    }
    const Manager = BaseManager(Enhanced, { ...props, Model: new ProjectModel(props) });
    return <Manager />;
};
export default ProjectManager;
