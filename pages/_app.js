import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import Header from '../components/Header'
import Footer from '../components/Footer'
import 'antd/dist/antd.css'
import '../styles/globals.css'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  Router.events.on('routeChangeStart', (url) => {
    NProgress.start();
  })
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());

  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}