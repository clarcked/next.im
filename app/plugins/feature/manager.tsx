import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GiTwoCoins } from "react-icons/gi";
import { MdRefresh } from "react-icons/md";
import { Selector, TextInput } from "../../comps/form";
import { BaseManager } from "../../core";
import FeatureModel from "./model";
import { ImMagicWand } from "react-icons/im";

const FeatureManager = (props: any) => {
    const { Model, submit } = props;
    const { handleSubmit, register, reset } = useForm();
    const debug = (data) => {
        console.log(data);
    };
    const onSubmit = async (data: any) => {
        try {
            const res = await submit(data);
            if (res) alert(`${res?.name} succesfully added!`);
            reset();
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form pad no-pad-t h-expand grid-r-1-a">
            <section>
                <div className="margin-b">
                    <TextInput Left={ImMagicWand} name="name" register={register} placeholder="Feature Name" />
                </div>
                <div className="rows gap margin-b flow-visible">
                    <div className="col-auto">
                        <TextInput Left={GiTwoCoins} placeholder="Cost" name="cost" register={register({ valueAsNumber: true })} />
                    </div>
                    <div className="col-auto">
                        <Selector options={["Monthly", "Yearly", "Weekly", "Daily", "Sec", "Hour"]} placeholder="Unit" name="unit" register={register} />
                    </div>
                </div>
            </section>
            <section>
                <div className="rows">
                    <div className="col-auto">
                        <button type="reset" className="btn btn-icon">
                            <MdRefresh />
                        </button>
                    </div>
                    <div className="col">
                        <button className="btn">Create Features</button>
                    </div>
                </div>
            </section>
        </form>
    );
};

export default BaseManager(FeatureManager, { Model: FeatureModel });
