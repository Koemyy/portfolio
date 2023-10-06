import '../styles/globals.css'
import type {AppProps} from 'next/app'
import GoogleTagManager from "../components/GTM/GoogleTagManager";
import {Head} from 'next/document';

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Head>
                <GoogleTagManager/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
