import "@/styles/index.css";
import Head from "next/head";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";
// If loading a variable font, you don't need to specify the font weight
const inter = Montserrat({ weight: "300", subsets: ["latin"] });
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Get the current route name from the router object
  const routeName = router.route.substring(1);
  // console.log(router)
  return (
    <main className={inter.className}>
      <Head>
        <title>{routeName === "" ? "PokeBookApp" : routeName}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        /> */}
      </Head>

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N"
        crossOrigin="anonymous"
      />
      {/* <Script
        src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
        crossOrigin="anonymous"
      ></Script> */}

      {/* <Script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossOrigin="anonymous"
      ></Script> */}

      {/* <Script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin="anonymous"
      ></Script> */}
      {/* <Script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></Script> */}
    </main>
  );
}
