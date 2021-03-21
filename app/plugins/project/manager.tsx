import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdClose, MdPerson, MdRefresh } from "react-icons/md";
import { GiBlackFlag } from "react-icons/gi";
import { Selector, TextInput } from "../../comps/form";
import { BaseManager } from "../../core";
import ProjectModel from "./model";
import { FaServer, FaSlackHash, FaUserPlus, FaUserShield } from "react-icons/fa";
import { RiShieldFlashLine } from "react-icons/ri";

const CollabField = ({ register, remove, field }) => {
    return (
        <div className="margin-b rows gap flow-visible">
            <div className="col-auto">
                <TextInput Left={FaUserShield} placeholder="Collaborator" register={register} name={`${field?.name}.email`} />
            </div>
            <div className="col-auto">
                <Selector placeholder="Role" options={["EMPLOYEE"]} Left={RiShieldFlashLine} register={register} name={`${field?.name}.roles[0]`} />
            </div>
            <div className="col">
                <button type="button" className="btn btn-icon outline" onClick={() => remove(field)}>
                    <MdClose />
                </button>
            </div>
        </div>
    );
};
const CollabFields = ({ fields, remove, register }) => (fields ? fields?.map((field, i) => <CollabField register={register} key={i} field={field} remove={remove} />) : <div />);
const ProjectManager = (props: any) => {
    const { submit } = props;
    const { handleSubmit, register } = useForm();
    const [collabs, set_collabs] = useState<Array<{ name: any }>>([]);
    const fetch = () => {};

    const onSubmit = async (data: any) => {
        try {
            const resp = await submit(data);
            console.log(resp);
            return data;
        } catch (error) {
            console.warn(error.message);
        }
    };

    const add_collab = () => {
        let index = collabs.length + 1;
        set_collabs([...collabs, { name: `collabs[${index}]` }]);
    };

    const rem_collab = (key: any) => {
        if (collabs) {
            set_collabs(collabs.filter((c) => c !== key));
        }
    };

    useEffect(() => {
        fetch();
    }, [collabs]);

    return (
        <form className="pad no-pad-t form h-expand grid-r-1-a" onSubmit={handleSubmit(onSubmit)}>
            <section className="scroll">
                <div className="margin-b">
                    <TextInput register={register} name="name" placeholder="Project Name" />
                </div>
                <div className="margin-b rows gap flow-visible">
                    <div className="col-auto">
                        <Selector options={["Argentina", "Haiti"]} Left={GiBlackFlag} register={register} name="country" placeholder="Select country" />
                    </div>
                    <div className="col-auto">
                        <Selector
                            options={[
                                { name: "Buenos Aires", id: "/api/hosts/2" },
                                { name: "Haiti", id: "/api/hosts/1" },
                            ]}
                            map="id"
                            Left={FaServer}
                            register={register}
                            name="host"
                            placeholder="Select Host"
                        />
                    </div>
                    <div className="col-auto">
                        <Selector
                            options={[
                                { name: "Commerce", id: "/api/categories/2" },
                                { name: "Services", id: "/api/categories/1" },
                            ]}
                            map="id"
                            Left={FaSlackHash}
                            register={register}
                            name="category"
                            placeholder="Select Category"
                        />
                    </div>
                </div>
                <div className="margin-b">
                    <TextInput Left={MdPerson} register={register} name="collabs[0].email" placeholder="Owner" />
                    <input ref={register} type="hidden" name="collabs[0].roles[0]" defaultValue={"ROLE_ADMIN"} />
                </div>
                <CollabFields fields={collabs} remove={rem_collab} register={register} />
                <div className="checkboxes">
                    <div className="field checkbox">
                        <label>
                            <input ref={register} type="checkbox" defaultValue={`/api/features/1`} name="features[]" />
                            <div className="label">E-Commerce</div>
                        </label>
                    </div>
                    <div className="field checkbox">
                        <label>
                            <input ref={register} type="checkbox" defaultValue={`/api/features/2`} name="features[]" />
                            <div className="label">Services</div>
                        </label>
                    </div>
                </div>
                <div className="field radiobox margin-b">
                    <label>
                        <input ref={register} type="radio" defaultValue="active" name="status" />
                        <div className="label">Activate</div>
                    </label>
                    <label>
                        <input ref={register} type="radio" defaultValue="pending" name="status" defaultChecked />
                        <div className="label">Pending</div>
                    </label>
                    <label>
                        <input ref={register} type="radio" defaultValue="inactive" name="status" />
                        <div className="label">Deactivate</div>
                    </label>
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
                            <div className="rows gap">
                                <div className="col">
                                    <button type="button" className="btn btn-icon" onClick={() => add_collab()}>
                                        <FaUserPlus />
                                    </button>
                                </div>
                                <div className="col">
                                    <button className="btn">Create Project</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </form>
    );
};

export default BaseManager(ProjectManager, { Model: ProjectModel });
