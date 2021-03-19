import React, { useEffect, useState } from "react";
import { BaseManager } from "../../core";
import FeatureModel from "./model";
import FeatureCard from "./card";

const FeatureList = (props: any) => {
    const { Model, Card } = props;
    const [features, set_features] = useState<any>([]);
    const fetch = () => {
        Model.list()
            .then((res) => {
                set_features(res?.edges);
            })
            .catch((e) => {});
    };
    useEffect(() => {
        fetch();
    }, []);

    return (
        <div className="rows j-center gap pad scroll">
            {features?.edges?.map((feature, idx) => (
                <div key={idx} className="col-2">
                    <Card data={feature} />
                </div>
            ))}
        </div>
    );
};

export default BaseManager(FeatureList, { Model: FeatureModel, Card: FeatureCard });
