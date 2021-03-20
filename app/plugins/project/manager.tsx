import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdPerson, MdRefresh } from "react-icons/md";
import { GiBlackFlag } from "react-icons/gi";
import { Selector, TextInput } from "../../comps/form";
import { BaseManager } from "../../core";
import ProjectModel from "./model";
import { FaServer } from "react-icons/fa";

const ProjectManager = (props: any) => {
    const { Model, submit } = props;
    const [projects, set_projects] = useState<any[]>([]);
    const { handleSubmit, register } = useForm();
    const fetch = () => {
        Model.list()
            .then((res) => {})
            .catch((e) => {});
    };

    const onSubmit = (data: any) => {
        console.log(data);
        return data;
    };

    useEffect(() => {
        fetch();
    }, []);

    return (
        <form className="w-300 pad-sm form scroll" onSubmit={handleSubmit(onSubmit)}>
            <TextInput register={register} name="name" placeholder="Project Name" />
            <TextInput Left={MdPerson} register={register} name="owner" placeholder="Owner" />
            <Selector options={["argentina", "haiti"]} Left={GiBlackFlag} register={register} name="country" placeholder="Select country" />
            <Selector
                options={[
                    { name: "argentina", id: "/api/hosts/2" },
                    { name: "haiti", id: "/api/hosts/1" },
                ]}
                map="id"
                Left={FaServer}
                register={register}
                name="host"
                placeholder="Select region"
            />
            <div className="margin-">
                <div className="rows">
                    <div className="col-auto">
                        <button type="reset" className="btn btn-icon">
                            <MdRefresh />
                        </button>
                    </div>
                    <div className="col-auto">
                        <button className="btn">Create Project</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default BaseManager(ProjectManager, { Model: ProjectModel });
