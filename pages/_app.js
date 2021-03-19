import "../styles/main.scss";
import { AppProvider } from "../app/core/providers/app";
import { RestProvider } from "../app/core/providers/rest";
import { GqlProvider } from "../app/core/providers/gql";

function MyApp({ Component, pageProps }) {
    return (
        <AppProvider {...pageProps}>
            <GqlProvider {...pageProps}>
                <RestProvider {...pageProps}>
                    <Component {...pageProps} />
                </RestProvider>
            </GqlProvider>
        </AppProvider>
    );
}

export default MyApp;
