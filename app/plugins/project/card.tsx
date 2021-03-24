import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";

const ProjectCard = (props: any) => {
    const { data: proj } = props;
    return (
        <div className="card card-overlay">
            <div className="card-header">
                <div className="actions">
                    <a className="btn btn-icon circle">
                        <MdEdit />
                    </a>
                </div>
            </div>
            <div className="card-body">
                <div className="title txt-">{proj?.name}</div>
                <div className="description txt-">
                    <div className="country">{proj?.country}</div>
                    <div className="host">{proj?.host?.name}</div>
                    <div className="collabs">
                        <div className="rows gap">
                            {proj?.collabs?.edges?.map((c, i) => {
                                return (
                                    <div key={i} className="col-auto">
                                        <div className="collab">{c?.email}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
