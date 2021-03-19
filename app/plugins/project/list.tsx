import React, { useEffect, useState } from "react";
import { BaseManager } from "../../core";
import EntityModel from "./model";
import EntityCard from "./card";

const EntityList = (props: any) => {
    const { Model, Card } = props;
    const [entities, set_entities] = useState<any>([]);
    const fetch = () => {
        Model.list()
            .then((res) => {
                set_entities(res?.edges);
            })
            .catch((e) => {});
    };
    useEffect(() => {
        fetch();
    }, []);

    return (
        <div className="rows j-center gap pad scroll">
            {entities?.edges?.map((entity, idx) => (
                <div key={idx} className="col-2">
                    <Card data={entity} />
                </div>
            ))}
        </div>
    );
};

export default BaseManager(EntityList, { Model: EntityModel, Card: EntityCard });
