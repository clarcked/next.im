import React, { Component } from "react";
import { BaseManager } from "../../core";
import HostModel from "./model";

const HostManager = (props) => {
    class Enhanced extends Component<any, any> {
        render() {
            const arg = this.props;
            return (
                <div className="pad">
                    <div>Host management</div>
                </div>
            );
        }
    }
    const Manager = BaseManager(Enhanced, { ...props, Model: new HostModel(props) });
    return <Manager />;
};
export default HostManager;
