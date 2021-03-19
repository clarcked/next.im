import Head from "next/head";
import React from "react";
import { getConfigs } from "../app/core/providers/app";
import { RiFolderSharedLine } from "react-icons/ri";

export default function Home(props: any) {
    return (
        <div className="rows gap flex-c">
            <div className="col-2p">
                <div className="card">
                    <div className="card-body">
                        <figure className="thumb outline">
                            <img src="https://fakeimg.pl/600x600" alt="card image" />
                        </figure>
                        <div className="title txt-c">Kioskito</div>
                        <div className="description txt-c">Commerce</div>
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
            </div>
        </div>
    );
}

export const getServerSideProps = async (ctx: any) => {
    const config = getConfigs(ctx);
    return {
        props: {
            ...config,
        },
    };
};
