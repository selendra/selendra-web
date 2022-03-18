import Head from "next/head";
import styles from "../styles/Home.module.css";
import Architecture from "../components/Architecture";
import Benefit from "../components/Benefit";
import Banner from "../components/Banner";
import Feature from "../components/Feature";
import UseCase from "../components/UseCase";
import TotalSupply from "../components/TotalSupply";
import Roadmap from "../components/Roadmap";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Selendra</title>
        <meta
          name="description"
          content="a micro-economic transactional system, a global network of people and organizations whose growth and success are made possible through the value-added contributions, deployment, and usage by and for network participants"
        />
      </Head>
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
