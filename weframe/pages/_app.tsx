import "@/app/main.scss"
import Layout from "@/components/layout"
import {AppProps} from "next/app"
import {Urbanist} from "next/font/google"

export const urbanist = Urbanist({subsets: ["latin"]})

export default function App({Component, pageProps}: AppProps) {
    return (
        <Layout className={urbanist.className}>
            <Component {...pageProps} />
        </Layout>
    )
}
