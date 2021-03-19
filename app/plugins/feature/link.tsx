import React, { Component } from "react";
import { FaSlackHash } from "react-icons/fa";
import { BaseLink } from "../../core";
import FeatureManager from "./manager";

const FeatureLink = (props: any) => {
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
    const Link = BaseLink(Enhanced, { ...props, Manager: FeatureManager });
    return <Link />;
};

export default FeatureLink;
