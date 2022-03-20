import Head from "next/head";

export default function NextMetaTags({ title, url, image }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      <meta
        name="description"
        content="The Selendra platform is used to build, deploy, and employ decentralized, peer-2-peer applications as simple as build the webapps and mobile applications we use today."
        key="description"
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title + "- Selendra"} key="og:title" />
      <meta
        property="og:description"
        content="The Selendra platform is used to build, deploy, and employ decentralized, peer-2-peer applications as simple as build the webapps and mobile applications we use today."
        key="og:description"
      />
      <meta property="og:image" content={image} key="og:image" />
      <meta property="og:url" content={url} key="og:url" />
      <meta
        name="twitter:card"
        content="The Selendra platform is used to build, deploy, and employ decentralized, peer-2-peer applications as simple as build the webapps and mobile applications we use today."
        key="twitter:card"
      />

      <meta
        property="og:site_name"
        content="The Selendra platform is used to build, deploy, and employ decentralized, peer-2-peer applications as simple as build the webapps and mobile applications we use today."
        key="og:site_name"
      />

      <meta property="twitter:url" content={url} key="twitter:url" />
      <meta name="twitter:image:alt" content="" key="twitter:image:alt" />
      <meta property="twitter:domain" content="Selendra" />

      <title>{title + "- Selendra"}</title>
    </Head>
  );
}
