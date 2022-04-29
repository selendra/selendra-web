import { motion, AnimatePresence } from "framer-motion";

import React from "react";
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

export default function MyApp({ Component, pageProps, router }) {
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

  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Header />
        <Component {...pageProps} />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
