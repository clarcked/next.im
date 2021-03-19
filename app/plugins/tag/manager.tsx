import React, { Component } from "react";
import { BaseManager } from "../../core";
import TagModel from "./model";

const TagManager = (props) => {
    class Enhanced extends Component<any, any> {
        render() {
            const arg = this.props;
            return (
                <div className="pad">
                    <div>Tag management</div>
                </div>
            );
        }
    }
    const Manager = BaseManager(Enhanced, { ...props, Model: new TagModel(props) });
    return <Manager />;
};
export default TagManager;
