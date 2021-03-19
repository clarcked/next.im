import React, { useEffect, useState } from "react";
import { BaseManager } from "../../core";
import CategoryModel from "./model";
import CategoryCard from "./card";

const CategoryList = (props: any) => {
    const { Model, Card } = props;
    const [categories, set_categories] = useState<any>([]);
    const fetch = () => {
        Model.list()
            .then((res) => {
                set_categories(res?.edges);
            })
            .catch((e) => {});
    };
    useEffect(() => {
        fetch();
    }, []);

    return (
        <div className="rows j-center gap pad scroll">
            {categories?.edges?.map((category, idx) => (
                <div key={idx} className="col-2">
                    <Card data={category} />
                </div>
            ))}
        </div>
    );
};

export default BaseManager(CategoryList, { Model: CategoryModel, Card: CategoryCard });
