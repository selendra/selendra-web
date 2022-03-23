import Head from "next/head";

export default function NextMetaTags({ title, url, image }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />

      <meta
        name="description"
        content="Selendra is a multi-chains nominated proof-of-stake network built with the Polkadot Substrate Blockchain framework to facilitate micro-economic transactions, building decentralized applications and trustless organization. It is designed to be interoperable with other open blockchains and developable by developers and students with very minimal learning curve, and ease of use for end-users to interact and benefits from blockchain technology."
        key="description"
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title + "- Selendra"} key="og:title" />
      <meta
        property="og:description"
        content="Selendra is a multi-chains nominated proof-of-stake network built with the Polkadot Substrate Blockchain framework to facilitate micro-economic transactions, building decentralized applications and trustless organization. It is designed to be interoperable with other open blockchains and developable by developers and students with very minimal learning curve, and ease of use for end-users to interact and benefits from blockchain technology."
        key="og:description"
      />
      <meta property="og:image" content={image} key="og:image" />
      <meta property="og:url" content={url} key="og:url" />
      <meta
        name="twitter:card"
        content="Selendra is a multi-chains nominated proof-of-stake network built with the Polkadot Substrate Blockchain framework to facilitate micro-economic transactions, building decentralized applications and trustless organization. It is designed to be interoperable with other open blockchains and developable by developers and students with very minimal learning curve, and ease of use for end-users to interact and benefits from blockchain technology."
        key="twitter:card"
      />

      <meta
        property="og:site_name"
        content="Selendra is a multi-chains nominated proof-of-stake network built with the Polkadot Substrate Blockchain framework to facilitate micro-economic transactions, building decentralized applications and trustless organization. It is designed to be interoperable with other open blockchains and developable by developers and students with very minimal learning curve, and ease of use for end-users to interact and benefits from blockchain technology."
        key="og:site_name"
      />

      <meta property="twitter:url" content={url} key="twitter:url" />
      <meta name="twitter:image:alt" content="" key="twitter:image:alt" />
      <meta property="twitter:domain" content="Selendra" />

      <title>{title + "- Selendra"}</title>
    </Head>
  );
}
