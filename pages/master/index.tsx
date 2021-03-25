import React, { Component } from "react";
import { MasterLayout } from "../../app/comps/layouts";
import MasterMenu from "../../app/comps/nav/MasterMenu";
import { getConfigs } from "../../app/core/providers/app";
import { ProjectList } from "../../app/plugins/project";

class Master extends Component<any, any> {
    render() {
        return (
            <MasterLayout {...this.props}>
                <div className="grid-c-1-a h-expand">
                    <div className="rows">
                        <ProjectList {...this.props} />
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

export default Master;
