import { Row, Col, Button } from "antd";
import styles from "../styles/product.module.css";
import Head from "next/head";

export default function Product() {
  return (
    <div>
      <Head>
        <title>Product</title>
      </Head>
      <div className={styles.background}>
        <div className="container">
          <Row align="middle" className={styles.bitriel}>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <h1>Bitriel Wallet</h1>
              <p>
                Digital wallet management for cross-chain assets, staking and
                governance operations, collection and self-owned private key.
              </p>
              <Button>
                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.selendra.secure_wallet"
                >
                  Get Android App{" "}
                </a>
              </Button>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Row justify="center">
                <img src="/images/bitriel-promo1.png" alt="bitriel-promo1" />
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.walletDetail}>
        <div className="container">
          <Row>
            <Col xs={0} sm={0} md={12} lg={12} xl={12}>
              <Row justify="center">
                <img src="/images/bitriel-promo2.png" alt="bitriel-promo2" />
              </Row>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <img src="/images/bitriel-logo.png" alt="bitriel-logo" />
              <h1>Get started with Bitriel</h1>
              <p>
                Bitriel Wallets are used to store and transact SEL tokens and
                multiple other cryptocoins. Wallets can be integrated into any
                application where a use case exists, connecting the application
                to the Selendra main chain.
              </p>
              <Button>
                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.selendra.secure_wallet"
                >
                  Get Android App{" "}
                </a>
              </Button>
            </Col>
            <Col xs={0} sm={0} md={0} lg={0} xl={0}>
              <Row justify="center">
                <img src="/images/bitriel-promo2.png" alt="bitriel-promo2" />
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.albazaar}>
        <div className="container">
          <Row>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <h1>Albazaar Marketplace</h1>
              <p>
                a planned virtual marketplace where goods and services can be
                exchanged through smart contracts in a peer-to-peer network,
                together with all the other added benefits blockchain technology
                has to offer. Buyers and sellers are empowered through the
                community where transactions can be negotiated with confidence.
              </p>
              <Button>Coming soon...</Button>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={12}>
              <Row justify="center">
                <img src="/images/albazaar-promo1.png" alt="albazaar-promo1" />
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
