import '../styles/globals.scss'
import {Provider} from "react-redux";
import {store} from "../store/store";
import {AppProps} from "next/app";




function MyApp({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
          />
                <Component {...pageProps} />
        </Provider>
    )
}

export default MyApp
