import React, { Component } from "react";
import { FaSlackHash } from "react-icons/fa";
import { CategoryManager } from ".";
import BaseLink from "../../core/link/BaseLink";

class Link extends Component<any, any> {
    render() {
        const { open } = this.props;
        return (
            <a className="has-icon" onClick={open}>
                <FaSlackHash />
            </a>
        );
    }
}

export default BaseLink(Link, { Manager: CategoryManager });
