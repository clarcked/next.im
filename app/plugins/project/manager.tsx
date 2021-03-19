import React, { useEffect, useState } from "react";
import { BaseManager } from "../../core";
import EntityModel from "./model";

const EntityManager = (props: any) => {
    const { Model } = props;
    const [entities, set_entities] = useState<any[]>([]);
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
            <div className="pad">Entity Manager</div>
        </div>
    );
};

export default BaseManager(EntityManager, { Model: EntityModel });
