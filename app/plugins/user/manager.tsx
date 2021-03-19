import React, { useEffect, useState } from "react";
import { BaseManager } from "../../core";
import UserModel from "./model";

const UserManager = (props: any) => {
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
        <div>
            <div className="pad">User Manager</div>
        </div>
    );
};

export default BaseManager(UserManager, { Model: UserModel });
