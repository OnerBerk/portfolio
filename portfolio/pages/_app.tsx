import '../styles/globals.scss'
import {ThemeProvider} from "next-themes";
import {Provider} from "react-redux";
import {store} from "../store/store";
import {AppProps} from "next/app";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;



function MyApp({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    )
}

export default MyApp
