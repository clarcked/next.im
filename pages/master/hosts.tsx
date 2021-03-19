import React, { Component } from "react";
import { MasterLayout } from "../../app/comps/layouts";
import { getConfigs } from "../../app/core/providers/app";
import { HostList } from "../../app/plugins/host";
import { UserLink } from "../../app/plugins/user";

class Hosts extends Component {
    render() {
        return (
            <MasterLayout {...this.props}>
                <div className="grid-c-1-a">
                    <div className="rows">
                        <HostList {...this.props} />
                    </div>
                    <nav className="nav nav-side nav-right wire-l">
                        <ul className="top">
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
export default Hosts;
