import React, { Component } from "react";
import { BaseManager } from "../../core";
import FeatureModel from "./model";

const FeatureManager = (props) => {
    class Enhanced extends Component<any, any> {
        render() {
            const arg = this.props;
            return (
                <div className="pad">
                    <div>Feature management</div>
                </div>
            );
        }
    }
    const Manager = BaseManager(Enhanced, { ...props, Model: new FeatureModel(props) });
    return <Manager />;
};
export default FeatureManager;
