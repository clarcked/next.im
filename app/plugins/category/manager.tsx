import React, { Component } from "react";
import { BaseManager } from "../../core";
import CategoryModel from "./model";

const CategoryManager = (props) => {
    class Enhanced extends Component<any, any> {
        render() {
            const arg = this.props;
            return (
                <div className="pad">
                    <div>Category management</div>
                </div>
            );
        }
    }
    const Manager = BaseManager(Enhanced, { ...props, Model: new CategoryModel(props) });
    return <Manager />;
};
export default CategoryManager;
