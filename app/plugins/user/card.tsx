import React, { useEffect, useState } from "react";
import { RiFolderSharedLine } from "react-icons/ri";
import { BaseManager } from "../../core";
import UserModel from "./model";

const UserCard = (props: any) => {
    const { Model } = props;
    const [users, set_users] = useState<any[]>([]);
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
        <div className="card">
            <div className="card-body">
                <figure className="thumb outline">
                    <img src="https://fakeimg.pl/600x600" alt="card image" />
                </figure>
                <div className="title txt-c">User Name</div>
                <div className="description txt-c">A quick description about.</div>
            </div>
            <div className="card-footer">
                <section className="rows">
                    <div className="col-auto">
                        <button className="btn btn-">
                            <RiFolderSharedLine />
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default BaseManager(UserCard, { Model: UserModel });
