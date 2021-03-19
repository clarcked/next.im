import React, { useEffect, useState } from "react";
import { BaseManager } from "../../core";
import HostModel from "./model";
import HostCard from "./card";

const HostList = (props: any) => {
    const { Model, Card } = props;
    const [hosts, set_hosts] = useState<any>([]);
    const fetch = () => {
        Model.list()
            .then((res) => {
                set_hosts(res?.edges);
            })
            .catch((e) => {});
    };
    useEffect(() => {
        fetch();
    }, []);

    return (
        <div className="rows j-center gap pad scroll">
            {hosts?.edges?.map((host, idx) => (
                <div key={idx} className="col-2">
                    <Card data={host} />
                </div>
            ))}
        </div>
    );
};

export default BaseManager(HostList, { Model: HostModel, Card: HostCard });
