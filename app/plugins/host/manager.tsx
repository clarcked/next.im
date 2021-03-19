import React, { useEffect, useState } from "react";
import { BaseManager } from "../../core";
import HostModel from "./model";

const HostManager = (props: any) => {
    const { Model } = props;
    const [hosts, set_hosts] = useState<any[]>([]);
    const fetch = () => {
        Model.list()
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {});
    };
    useEffect(() => {
        fetch();
    }, []);
    return (
        <div>
            <div className="pad">Host Manager</div>
        </div>
    );
};

export default BaseManager(HostManager, { Model: HostModel });
