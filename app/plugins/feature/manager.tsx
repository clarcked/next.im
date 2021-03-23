import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdRefresh } from "react-icons/md";
import { BaseManager } from "../../core";
import FeatureModel from "./model";

const FeatureManager = (props: any) => {
    const { Model } = props;
    const { handleSubmit, register} = useForm()
    const [features, set_features] = useState<any[]>([]);
    const fetch = () => { 
    };
    const debug = (data)=>{
        console.log(data)
    }
    useEffect(() => {
        fetch();
    }, []);
    return (
        <form onSubmit={handleSubmit(debug)} className="form padd no-pad-t h-expand grid-r-1-a">
            <section className="pad">

            </section>
            <section>
                <div className="margin-">
                    <div className="rows">
                        <div className="col-auto">
                            <button type="reset" className="btn btn-icon">
                                <MdRefresh />
                            </button>
                        </div>
                        <div className="col">
                            <button className="btn">Create Activity</button>
                        </div>
                    </div>
                </div>
            </section>
        </form>
    );
};

export default BaseManager(FeatureManager, { Model: FeatureModel });
