import React, { Component } from "react";
import { MasterLayout } from "../../../app/comps/layouts";
import MasterMenu from "../../../app/comps/nav/MasterMenu";
import { getConfigs } from "../../../app/core/providers/app";
import { ProjectList, ProjectManager } from "../../../app/plugins/project";
import { AvatarEditable } from "../../../app/comps/avatar";
import RestHttp from "../../../app/core/http/RestHttp";

class Project extends Component<any, any> {
    render() {
        const { project } = this.props;
        return (
            <MasterLayout {...this.props}>
                <div className="grid-c-1-a h-expand">
                    <div className="grid-c-1-a h-expand">
                        <div className="col pad-5 scroll">
                            <ProjectList {...this.props} />
                        </div>
                        <div className="col wire-l w-300 h-expand scroll">
                            <div className="profile grid-r-a-1">
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
                                    <div className="profile-body pad">
                                        <ProjectManager {...this.props} mode="edit" defaultValue={{ ...project, id: `/api/projects/${project?.id}` }} />
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
export const getStaticPaths = async (ctx) => {
    const { rest } = getConfigs(ctx);
    const http = new RestHttp(rest);
    const res = await http.query("/api/projects", { headers: { Accept: "application/json", "im-project-tag": "master" } });
    const projects: any[] = res?.ok ? await res.json() : [];
    const paths = projects?.map((project) => ({
        params: {
            name: project?.name,
        },
    }));
    return {
        paths: paths,
        fallback: false,
    };
};
export const getStaticProps = async (ctx: any) => {
    const config = getConfigs(ctx);
    const http = new RestHttp(config?.rest);
    const res = await http.query(`/api/projects?name=${ctx?.params?.name}`, { headers: { Accept: "application/json", "im-project-tag": "master" } });
    const data = res?.ok ? await res?.json() : null;
    return {
        props: {
            ...config,
            project: data && data[0],
        },
    };
};

export default Project;
