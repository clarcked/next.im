import React, { useEffect, useState } from "react";
import { BaseManager } from "../../core";
import HostModel from "./model";
import { useForm } from "react-hook-form";
import { debug } from "node:console";
import { MdRefresh } from "react-icons/md";
import { TextInput } from "../../comps/form";

const HostManager = (props: any) => {
    const { Model, submit } = props;
    const { handleSubmit, register, reset } = useForm();
    const debug = (data: any) => console.log(data);
    const onSubmit = async (data: any) => {
        try {
            const res = await submit(data);
            if (res) alert(`${res?.name} created successfully`);
            reset();
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form pad not-pad-t grid-r-1-a">
            <section>
                <div className="margin-b">
                    <TextInput name="name" placeholder="Host Name" register={register} />
                </div>
                <div className="margin-b">
                    <div className="rows gap">
                        <div className="col-auto">
                            <TextInput name="ip" placeholder="IP Address" register={register} />
                        </div>
                        <div className="col-auto">
                            <TextInput name="region" placeholder="Region" register={register} />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="rows">
                    <div className="col-auto">
                        <button className="btn btn-icon" type="button">
                            <MdRefresh />
                        </button>
                    </div>
                    <div className="col">
                        <button className="btn" type="submit">
                            Create Host
                        </button>
                    </div>
                </div>
            </section>
        </form>
    );
};

export default BaseManager(HostManager, { Model: HostModel });
