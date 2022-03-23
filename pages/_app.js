import React from "react";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "antd/dist/antd.css";
import "remixicon/fonts/remixicon.css";
import "../styles/globals.css";

NProgress.configure({
  minimum: 0.3,
  easing: "ease",
  speed: 800,
  showSpinner: false,
});

export default function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    let routeChangeStart = () => NProgress.start();
    let routeChangeComplete = () => NProgress.done();

    Router.events.on("routeChangeStart", routeChangeStart);
    Router.events.on("routeChangeComplete", routeChangeComplete);
    Router.events.on("routeChangeError", routeChangeComplete);

    return () => {
      Router.events.off("routeChangeStart", routeChangeStart);
      Router.events.off("routeChangeComplete", routeChangeComplete);
      Router.events.off("routeChangeError", routeChangeComplete);
    };
  }, []);

  return (
    <div>
      <Head>
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
