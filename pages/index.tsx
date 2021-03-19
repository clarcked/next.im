import Head from "next/head";
import { CategoryLink } from "../app/plugins/category";
import { getConfigs } from "../app/core/providers/app";

export default function Home(props: any) {
    return (
        <div className="">
            <div>list of your project</div>
            <CategoryLink {...props} />
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
