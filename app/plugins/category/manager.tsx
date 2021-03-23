import React, { useEffect, useState } from "react";
import { BaseManager } from "../../core";
import CategoryModel from "./model";
import { useForm } from "react-hook-form";
import { debug } from "node:console";
import { FaUserPlus, FaSlackHash } from "react-icons/fa";
import { MdRefresh, MdClose } from "react-icons/md";
import TextInput from "../../comps/form/TextInput";

const CategoryManager = (props: any) => {
    const { list, submit, remove } = props;
    const { register, handleSubmit, reset } = useForm();
    const [categories, set_categories] = useState<any>([]);

    const fetch = async () => {
        try {
            const categories = await list();
            set_categories(categories?.edges);
        } catch (error) {
            console.log(error.message);
        }
    };

    const onSubmitted = async (arg) => {
        console.log(arg, "on submitted");
        if (arg) {
            await fetch();
            reset();
            alert(`${arg?.name} succesfully added!`);
        }
    };
    const onSubmit = (data: any) => submit(data, async (arg) => await onSubmitted(arg));

    useEffect(() => {
        fetch().then().catch();
    }, []);

    return (
        <form className="form pad no-pad-t h-expand grid-r-1-a" onSubmit={handleSubmit(onSubmit)}>
            <section className="grid-r-a-1 h-expand">
                <div className="grid-r-a-1 h-expand">
                    <div className="">
                        <TextInput Left={FaSlackHash} name="name" register={register} placeholder="Activity name"></TextInput>
                    </div>
                    <div className="categories scroll">
                        <div className="pad-sm">
                            <div className="tags">
                                {categories?.map(({ node: category }, idx) => (
                                    <div className="tag" key={idx}>
                                        <div className="tag-name">{category?.name}</div>
                                        <button onClick={() => confirm(`Remove ${category?.name}?`) && remove(category, async () => await fetch())} type="button" className="tag-btn tag-icon outline">
                                            <MdClose />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
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

export default BaseManager(CategoryManager, { Model: CategoryModel });
