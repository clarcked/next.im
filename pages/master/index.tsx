import React, { Component } from "react";
import { MasterLayout } from "../../app/comps/layouts";
import { getConfigs } from "../../app/core/providers/app";
import ProjectManager from "../../app/plugins/project/manager";
import ProjectLink from "../../app/plugins/project/link";

class Master extends Component<any, any> {
    render() {
        return (
            <MasterLayout {...this.props}>
                <div className="grid-c-1-a">
                    <div className="rows">
                        <div className="pad">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto tenetur veritatis, incidunt modi nihil commodi minus nulla repellat voluptatum, necessitatibus labore
                            itaque accusamus quibusdam maiores quas dolor eum voluptatem expedita!
                        </div>
                    </div>
                    <nav className="nav nav-left wire-l">
                        <ul className="top">
                            <li>
                                <ProjectLink {...this.props} className="is-icon" />
                            </li>
                        </ul>
                        <ul className="middle"></ul>
                        <ul className="bottom"></ul>
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
