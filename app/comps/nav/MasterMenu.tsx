import React, { Component } from "react";
import { CategoryLink } from "../../plugins/category";
import { FeatureLink } from "../../plugins/feature";
import { HostLink } from "../../plugins/host";
import { ProjectLink } from "../../plugins/project";
import { UserLink } from "../../plugins/user";

class MasterMenu extends Component<any, any> {
    render() {
        return (
            <nav className="nav nav-side nav-right wire-l">
                <ul className="top">
                    <li>
                        <ProjectLink {...this.props} className="is-icon" />
                    </li>
                    <li>
                        <CategoryLink {...this.props} className="is-icon" />
                    </li>
                    <li>
                        <FeatureLink {...this.props} className="is-icon" />
                    </li>
                    <li>
                        <HostLink {...this.props} className="is-icon" />
                    </li>
                    <li>
                        <UserLink {...this.props} className="is-icon" />
                    </li>
                </ul>
            </nav>
        );
    }
}

export default MasterMenu;
