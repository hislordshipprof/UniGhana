import "@/styles/index.css";
import Head from "next/head";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.css";
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
        <title>{routeName === "" ? "Sweeft Shipping" : routeName}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N"
        crossOrigin="anonymous"
      />
    </main>
  );
}
