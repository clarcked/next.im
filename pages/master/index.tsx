import React, { Component } from "react";
import { MasterLayout } from "../../app/comps/layouts";
import { getConfigs } from "../../app/core/providers/app";
import { CategoryLink } from "../../app/plugins/category";
import { FeatureLink } from "../../app/plugins/feature";
import { HostLink } from "../../app/plugins/host";
import { ProjectLink, ProjectList } from "../../app/plugins/project";
import { UserLink } from "../../app/plugins/user";

class Master extends Component<any, any> {
    render() {
        return (
            <MasterLayout {...this.props}>
                <div className="grid-c-1-a h-expand">
                    <div className="rows">
                        <ProjectList {...this.props} />
                    </div>
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
                </div>
            </MasterLayout>
        );
    }
}

export const getServerSideProps = async (ctx: any) => {
    const config = getConfigs(ctx);

    return {
        props: {
            ...config,
        },
    };
};

export default Master;
