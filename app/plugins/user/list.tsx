import React, { useEffect, useState } from "react";
import { BaseManager } from "../../core";
import UserModel from "./model";
import UserCard from "./card";

const UserList = (props: any) => {
    const { Model, Card } = props;
    const [users, set_users] = useState<any>([]);
    const fetch = () => {
        Model.list()
            .then((res) => {
                set_users(res?.edges);
            })
            .catch((e) => {});
    };
    useEffect(() => {
        fetch();
    }, []);

    return (
        <div className="rows j-center gap pad scroll">
            {users?.edges?.map((user, idx) => (
                <div key={idx} className="col-2">
                    <Card data={user} />
                </div>
            ))}
        </div>
    );
};

export default BaseManager(UserList, { Model: UserModel, Card: UserCard });
