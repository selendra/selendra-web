import Head from "next/head";
import styles from "../styles/Home.module.css";
import Architecture from "../components/Architecture";
import Benefit from "../components/Benefit";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import UseCase from "../components/UseCase";
import TotalSupply from "../components/TotalSupply";
import Roadmap from "../components/Roadmap";
import NextMetaTags from "../components/NextMetaTags";
export default function Home() {
  return (
    <div>
      <NextMetaTags
        title="A multi-chains nominated proof-of-stake system built with Polkadot Substrate framework for mainstream users adoption by empowering developers to build blockchain applications with minimal learning curve."
        url="https://www.selendra.com/"
        image="https://www.selendra.com/images/meta-images/home.png"
      />
      <Banner styles={styles} />
      <Feature styles={styles} />
      <Benefit styles={styles} />
      <Architecture styles={styles} />
      <UseCase styles={styles} />
      <TotalSupply styles={styles} />
      <Roadmap styles={styles} />
    </div>
  );
}
