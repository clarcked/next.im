import React, { useEffect, useState } from "react";
import { BaseManager } from "../../core";
import UserModel from "./model";
import { useForm } from "react-hook-form";
import { MdRefresh, MdPerson } from "react-icons/md";
import { Selector, TextInput } from "../../comps/form";
import { IoMdKey, IoMdMail } from "react-icons/io";
import { FaUserShield } from "react-icons/fa";
import { is_valid_email } from "../../core/utils";

const UserManager = (props: any) => {
    const { Model, submit } = props;
    const { handleSubmit, register, reset } = useForm();
    const is_pwd_match = (data: any) => data && data?.password === data?.vpassword;
    const is_pwd_empty = (data: any) => data && data?.password === "";
    const is_email = (data: any) => data && is_valid_email(data?.email);
    const is_validate = (data: any) => {
        let is_valid = true;
        if (!is_pwd_match(data)) {
            alert("Please confirm password!");
            is_valid = false;
        }
        if (is_pwd_empty(data)) {
            alert("Please verify password!");
            is_valid = false;
        }
        if (!is_email(data)) {
            alert("Please verify email!");
            is_valid = false;
        }
        return is_valid;
    };
    const debug = (data: any) => {
        if (is_validate(data)) console.log(data);
    };
    const on_submit = async (data: any) => {
        try {
            if (!is_validate(data)) return null;
            const res = await submit(data);
            if (res.id) alert(`${res.username} created succesfully!`);
            reset();
        } catch (error) {
            console.log(error.message);
        }
    };
    return (
        <form className="form pad no-pad-t h-expand grid-r-1-a" onSubmit={handleSubmit(on_submit)}>
            <section className="scroll">
                <div className="margin-b">
                    <div className="rows gap">
                        <div className="col-auto">
                            <TextInput name="profile.firstname" register={register} placeholder="First Name" />
                        </div>
                        <div className="col-auto">
                            <TextInput name="profile.lastname" register={register} placeholder="Family Name" />
                        </div>
                    </div>
                </div>
                <div className="margin-b">
                    <TextInput Left={MdPerson} name="username" register={register} placeholder="Username" />
                </div>
                <div className="margin-b">
                    <TextInput Left={IoMdMail} name="email" register={register} placeholder="Email" />
                </div>
                <div className="margin-b">
                    <div className="rows gap">
                        <div className="col-auto">
                            <TextInput Left={IoMdKey} type="password" name="password" register={register} placeholder="Password" />
                        </div>
                        <div className="col-auto">
                            <TextInput Left={IoMdKey} type="password" name="vpassword" register={register} placeholder="Confirm" />
                        </div>
                    </div>
                </div>
                <div className="chexboxes margin-b">
                    <div className="field checkbox">
                        <label>
                            <input ref={register} defaultChecked defaultValue="ROLE_USER" type="checkbox" name="roles[]" />
                            <div className="label">User</div>
                        </label>
                    </div>
                    <div className="field checkbox">
                        <label>
                            <input ref={register} defaultValue="ROLE_OWNER" type="checkbox" name="roles[]" />
                            <div className="label">Owner</div>
                        </label>
                    </div>
                    <div className="field checkbox">
                        <label>
                            <input ref={register} defaultValue="ROLE_EMPLOYEE" type="checkbox" name="roles[]" />
                            <div className="label">Employee</div>
                        </label>
                    </div>
                    <div className="field checkbox">
                        <label>
                            <input ref={register} defaultValue="ROLE_CLIENT" type="checkbox" name="roles[]" />
                            <div className="label">Client</div>
                        </label>
                    </div>
                </div>
            </section>
            <section>
                <div className="rows">
                    <div className="col-auto">
                        <button type="reset" className="btn btn-icon" onClick={reset}>
                            <MdRefresh />
                        </button>
                    </div>
                    <div className="col">
                        <button type="submit" className="btn">
                            Create User
                        </button>
                    </div>
                </div>
            </section>
        </form>
    );
};

export default BaseManager(UserManager, { Model: UserModel });
