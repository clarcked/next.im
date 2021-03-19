import React, { useEffect, useState } from "react";
import { BaseManager } from "../../core";
import CategoryModel from "./model";

const CategoryManager = (props: any) => {
    const { Model } = props;
    const [categories, set_categories] = useState<any[]>([]);
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
            <div className="pad">Category Manager</div>
        </div>
    );
};

export default BaseManager(CategoryManager, { Model: CategoryModel });
