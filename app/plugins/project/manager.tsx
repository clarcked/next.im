import React, { useEffect, useState } from "react";
import { BaseManager } from "../../core";
import ProjectModel from "./model";

const ProjectManager = (props: any) => {
    const { Model } = props;
    const [projects, set_projects] = useState<any[]>([]);
    const fetch = () => {
        Model &&
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
            <div className="pad">Project Manager</div>
            <div className="pad">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, consequuntur. Repellendus, ipsum, fugit esse quos nam iusto, nesciunt earum excepturi dolores ducimus distinctio quam
                autem ratione dolore libero voluptas iste.
            </div>
        </div>
    );
};

export default BaseManager(ProjectManager, { Model: ProjectModel });
