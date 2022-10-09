import {ThemeProvider} from "next-themes";
import '../styles/globals.scss'
import {Provider} from "react-redux";
import {store} from "../store/store";
import {AppProps} from "next/app";


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
