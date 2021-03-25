import React, { useEffect, useState } from "react";
import { BaseManager } from "../../core";
import ProjectModel from "./model";
import ProjectCard from "./card";

const ProjectList = (props: any) => {
    const { list } = props;
    const [projects, set_projects] = useState<any>([]);
    const fetch = async () => {
        const projs = await list();
        set_projects(projs.edges);
    };
    useEffect(() => {
        fetch();
    }, []);

    return (
        <div className="rows gap">
            {projects?.map(({ node: project }, idx) => (
                <div key={idx} className="col-3">
                    <ProjectCard {...props} data={project} />
                </div>
            ))}
        </div>
    );
};

export default BaseManager(ProjectList, { Model: ProjectModel });
