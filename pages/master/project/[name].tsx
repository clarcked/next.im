import React, { Component } from "react";
import { MasterLayout } from "../../../app/comps/layouts";
import MasterMenu from "../../../app/comps/nav/MasterMenu";
import { getConfigs } from "../../../app/core/providers/app";
import { ProjectList, ProjectManager } from "../../../app/plugins/project";
import { AvatarEditable } from "../../../app/comps/avatar";

class Project extends Component<any, any> {
    render() {
        return (
            <MasterLayout {...this.props}>
                <div className="grid-c-1-a h-expand">
                    <div className="grid-c-1-a h-expand">
                        <div className="col pad-5 scroll">
                            <ProjectList {...this.props} />
                        </div>
                        <div className="col wire-l w-300 h-expand">
                            <div className="profile grid-r-a-1 h-expand">
                                <div className="profile-header">
                                    <div className="picture">
                                        <AvatarEditable />
                                    </div>
                                    <div className="description">
                                        <div className="username">My Project Name</div>
                                        <div className="host">Argentina</div>
                                    </div>
                                </div>
                                <section className="grid-r-1-a">
                                    <div className="profile-body scroll pad">
                                        <ProjectManager {...this.props} />
                                    </div>
                                    <div className="profile-footer"></div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <MasterMenu {...this.props} />
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

export default Project;
