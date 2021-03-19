import React, { useEffect, useState } from "react";
import { BaseManager } from "../../core";
import FeatureModel from "./model";

const FeatureManager = (props: any) => {
    const { Model } = props;
    const [features, set_features] = useState<any[]>([]);
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
            <div className="pad">Feature Manager</div>
        </div>
    );
};

export default BaseManager(FeatureManager, { Model: FeatureModel });
