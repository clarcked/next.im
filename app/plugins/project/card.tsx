import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import Link from "next/link";

const ProjectCard = (props: any) => {
    const { data: proj } = props;
    return (
        <div className="card card-overlay" style={{ backgroundImage: `url(https://picsum.photos/600/600)` }}>
            <div className="card-header">
                <div className="actions">
                    <Link href={`/master/project/${proj?.name}`}>
                        <a className="btn btn-icon circle">
                            <MdEdit />
                        </a>
                    </Link>
                </div>
            </div>
            <div className="card-body">
                <div className="title txt-">{proj?.name}</div>
                <div className="description txt-">
                    <div className="country">{proj?.country}</div>
                    <div className="host">{proj?.host?.name}</div>
                    <div className="avatar-group j-right">
                        {proj?.collabs?.edges?.map(({ node: co }, i) => {
                            return (
                                <div key={i}>
                                    <figure title={co?.email} className="avatar avatar-sm">
                                        <img src="https://fakeimg.pl/300x300" alt="avatar" />
                                    </figure>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
